let svg = d3.select("svg"),
    width = +svg.node().getBoundingClientRect().width,
    height = +svg.node().getBoundingClientRect().height;

// svg objects
let gLink, gNode, dNodes, dLinks, dText, nodeLabels, gOverlay, zoomTransform, dLabels;
// the data - an object with nodes and links
let graph;
let fdoStore;
let colorPid, colorType;
let tip;
let maxTextWidth;

export function chart(_fdoStore) {
    fdoStore = _fdoStore;
}

export function render() {
    svg.selectAll("*").remove();
    graph = buildGraph(fdoStore.toData());
    colorPid = d3.scaleOrdinal(graph.nodes.map(d => d.id).sort(d3.ascending), d3.schemeCategory10);
    colorType = d3.scaleOrdinal(graph.links.map(d => d.relationType).sort(d3.ascending), d3.schemeCategory10);

    let defs = svg.join("defs");

    let set = [...new Set(graph.links.map(d => d.relationType))];
    for (let i = 0; i < set.length; i++) {
        let elem = set[i];
        defs
            .append("svg:marker")
            .attr("id", "marker_" + elem)
            .attr("refX", 24)
            .attr("refY", 6)
            .attr("markerWidth", 30)
            .attr("markerHeight", 30)
            .attr("markerUnits", "userSpaceOnUse")
            .attr("orient", "auto")
            .append("path")
            .attr("d", "M 0 0 12 6 0 12 3 6")
            .style("fill", colorType(elem));
    }

    initializeDisplay();
    initializeSimulation();
}

let buildGraph = (data) => {
    const nodes = data.nodes.map(({id, type, customName, props}) => ({
        id,
        customName,
        sourceLinks: [],
        targetLinks: [],
        type,
        props
    }));

    const nodeById = new Map(nodes.map(d => [d.id, d]));

    const links = data.links.map(({source, target, relationType}) => ({
        source: nodeById.get(source),
        target: nodeById.get(target),
        relationType
    }));

    for (const link of links) {
        const {source, target} = link;
        source.sourceLinks.push(link);
        target.targetLinks.push(link);
    }

    return {nodes, links};
}

//////////// FORCE SIMULATION ////////////

// force simulator
let simulation = d3.forceSimulation();


// set up the simulation and event to update locations after each tick
function initializeSimulation() {
    simulation.nodes(graph.nodes);
    initializeForces();
    simulation.on("tick", ticked);
}

// values for all forces
let forceProperties = {
    center: {
        x: 0.5,
        y: 0.5
    },
    charge: {
        enabled: true,
        strength: -70,
        distanceMin: 40,
        distanceMax: 2000
    },
    collide: {
        enabled: true,
        strength: .7,
        iterations: 1,
        radius: 5
    },
    forceX: {
        enabled: false,
        strength: .1,
        x: .5
    },
    forceY: {
        enabled: false,
        strength: .1,
        y: .5
    },
    link: {
        enabled: true,
        distance: 250,
        iterations: 1
    }
}

// add forces to the simulation
function initializeForces() {
    // add forces and associate each with a name
    simulation
        .force("link", d3.forceLink())
        .force("charge", d3.forceManyBody())
        .force("collide", d3.forceCollide())
        .force("center", d3.forceCenter())
        .force("forceX", d3.forceX())
        .force("forceY", d3.forceY());
    // apply properties to each of the forces
    updateForces();
}

// apply new force properties
function updateForces() {
    // get each force by name and update the properties
    simulation.force("center")
        .x(width * forceProperties.center.x)
        .y(height * forceProperties.center.y);
    simulation.force("charge")
        .strength(forceProperties.charge.strength * forceProperties.charge.enabled)
        .distanceMin(forceProperties.charge.distanceMin)
        .distanceMax(forceProperties.charge.distanceMax);
    simulation.force("collide")
        .strength(forceProperties.collide.strength * forceProperties.collide.enabled)
        .radius(forceProperties.collide.radius)
        .iterations(forceProperties.collide.iterations);
    simulation.force("forceX")
        .strength(forceProperties.forceX.strength * forceProperties.forceX.enabled)
        .x(width * forceProperties.forceX.x);
    simulation.force("forceY")
        .strength(forceProperties.forceY.strength * forceProperties.forceY.enabled)
        .y(height * forceProperties.forceY.y);
    simulation.force("link")
        .id(function (d) {
            return d.id;
        })
        .distance(forceProperties.link.distance)
        .strength(.01)
        .iterations(forceProperties.link.iterations)
        .links(forceProperties.link.enabled ? graph.links : []);

    // updates ignored until this is run
    // restarts the simulation (important if simulation has already slowed down)
    simulation.alpha(1).restart();
}

//////////// DISPLAY ////////////

// generate the svg objects and force simulation
function initializeDisplay() {
    let tip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // set the data and properties of link lines
    gLink = svg.append("g")
        .attr("class", "links");
    let processed = [];
    dLinks = gLink
        .selectAll("line")
        .data(graph.links)
        .enter()
        .append("line")
        .attr("class", "dummy")
        .attr("id", function (d, i) {
            return "linkId_" + i;
        })
        .attr("stroke-width", 2)
        .attr("stroke", d => colorType(d.relationType))
        .attr("opacity", forceProperties.link.enabled ? 2 : 0)
        .attr("marker-end", d => 'url(#marker_' + d.relationType + ')')
        .attr("marker-fill", 'red')
        .attr("class", (d) => {
            processed.push(d.source.id + " - " + d.target.id);
            if (processed.includes(d.target.id + " - " + d.source.id)) {
                return "dashed"
            }
            return "solid";
        });

    dText = gLink.selectAll(".marker")
        .data(graph.links)
        .enter()
        .append("text")
        .attr("class", "marker")
        .attr("font-family", "sans-serif")
        .attr("font-size", 8)
        .attr("fill", d => colorType(d.relationType))
        .text((d) => d.relationType);

    maxTextWidth = d3.max(dText.nodes(), n => n.getComputedTextLength());

    gOverlay = svg.append("g")
        .attr("id", "overlay")
        .attr("class", "marker");

    // set the data and properties of node circles
    gNode = svg.append("g")
        .attr("class", "nodes");

    dNodes = gNode.selectAll("circle")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("r", 16)
        .attr("r", d => d.selected ? 20 : 16)
        .attr("fill", d => colorPid(d.id))
        .attr("class", "dummy")
        .on("mouseover", (e, d) => {
            if (dragging) {
                //not showing mouse-over information
                return;
            }

            let linkNodes = fdoStore.getLinks(d);
            //create layer for labels
            dLabels = gOverlay.selectAll("g")
                .attr("id", "drawLayer")
                .data(linkNodes)
                .enter()
                .append("g")
                .attr("class", "nameLabel");
            //append label path
            dLabels.append("path").attr("d", d => `M${d.x - 15} ${d.y - 15} l 6 10 l -10 -4 l -170 0 l 0 -16 l 174 0 Z`);
            //append label text
            dLabels.append("text")
                .attr("font-family", "sans-serif")
                .attr("font-size", 12)
                .text(d => {
                    return d.customName ? d.customName : d.id;
                })
                .attr("x", (d, i, e) => d.x - 15 - 85 - e[i].getComputedTextLength() / 2)
                .attr("y", d => d.y - 12);

            /*  tip.style("opacity", 1)
                  .html("<display-magic value='21.T11981/be908bd1-e049-4d35-975e-8e27d40117e6' open-by-default='true'></display-magic>")
                  .style("left", (e.pageX-25) + "px")
                  .style("top", (e.pageY-75) + "px");*/
        })
        .on("mouseout", (e, d) => {
            svg.selectAll(".nameLabel").remove();
            svg.selectAll("#drawLayer").remove();
            dLabels = undefined;
            tip.style("opacity", 0)
                .style("left", "0px")
                .style("top", "0px")
        }).call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    svg.call(d3.zoom()
        .extent([[0, 0], [+svg.node().getBoundingClientRect().width, +svg.node().getBoundingClientRect().height]])
        .scaleExtent([0, 8])
        .on("zoom", zoomed));

    // node tooltip
    /* node.append("title")
         .text(function(d) { return d.id; });*/
}

export function selectNodes(nodeIds) {
    dNodes.classed("selected", false).order();
    dNodes.classed("unselected", false).order();
    dLinks.classed("selected", false).order();
    dLinks.classed("unselected", false).order();
    dText.classed("selected", false).order();
    dText.classed("unselected", false).order();

    if (nodeIds.length > 0) {
        dNodes.classed("unselected", d => !nodeIds.includes(d.id));
        dLinks.classed("unselected", d => !(nodeIds.includes(d.source.id) && nodeIds.includes(d.target.id)));
        dText.classed("unselected", d => !(nodeIds.includes(d.source.id) && nodeIds.includes(d.target.id)));

        dNodes.classed("selected", d => nodeIds.includes(d.id));
        dLinks.classed("selected", d => (nodeIds.includes(d.source.id) && nodeIds.includes(d.target.id)));
        dText.classed("selected", d => (nodeIds.includes(d.source.id) && nodeIds.includes(d.target.id)));
    }
    dNodes.classed("selected", d => nodeIds.includes(d.id));
    dNodes.attr("r", d => nodeIds.includes(d.id) ? 14 : 12);
}

// update the display positions after each simulation tick
function ticked() {
    dLinks
        .attr("x1", function (d) {
            return d.source.x;
        })
        .attr("y1", function (d) {
            return d.source.y;
        })
        .attr("x2", function (d) {
            return d.target.x;
        })
        .attr("y2", function (d) {
            return d.target.y;
        });

    let processed = [];
    dText.attr("transform", (d, i) => {
        let slope = (d.target.y - d.source.y) / (d.target.x - d.source.x);
        let deg = Math.atan(slope) * 180 / Math.PI;
        let centerX = (d.source.x + d.target.x) / 2;
        let centerY = (d.source.y + d.target.y) / 2;
        let xTrans = -maxTextWidth / 2;
        let yTrans = -3;
        processed.push(d.source.id + " - " + d.target.id);
        if (processed.includes(d.target.id + " - " + d.source.id)) {
            yTrans = 8;
        }
        return "translate(" + centerX + "," + centerY + ")rotate(" + deg + ")translate(" + xTrans + "," + yTrans + ")";
    });

    dNodes
        .attr("cx", function (d) {
            return d.x;
        })
        .attr("cy", function (d) {
            return d.y;
        });

    if (dLabels) {
        dLabels
            .attr("x", function (d) {
                return d.x;
            })
            .attr("y", function (d) {
                return d.y;
            })
            .attr("d", d => `M${d.x - 15} ${d.y - 15} l 6 10 l -10 -4 l -170 0 l 0 -16 l 174 0 Z`);
    }
    d3.select('#alpha_value').style('flex-basis', (simulation.alpha() * 100) + '%');
}

let dragging = false;

//////////// UI EVENTS ////////////
function zoomed({transform}) {
    zoomTransform = transform;
    gLink.attr("transform", transform);
    gNode.attr("transform", transform);
    gOverlay.attr("transform", transform);
}

function dragstarted(e, d) {
    if (!e.active) simulation.alphaTarget(0.3).restart();
    svg.selectAll(".nameLabel").remove();
    svg.selectAll("#drawLayer").remove();
    dragging = true;
}

function dragged(e, d) {
    d3.select(this).attr("cx", d.x = e.x).attr("cy", d.y = e.y);
}

function dragended(e, d) {
    if (!e.active) simulation.alphaTarget(0.0001);
    d.fx = null;
    d.fy = null;
    dragging = false;
}

// update size-related forces
d3.select(window).on("resize", function () {
    width = +svg.node().getBoundingClientRect().width;
    height = +svg.node().getBoundingClientRect().height;
    updateForces();
});
