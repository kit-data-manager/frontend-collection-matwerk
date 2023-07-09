let data = {
    "nodes": [
         ],
    "links": [
     ]
}
let margin = ({top: 20, right: 20, bottom: 20, left: 250});
let step = 35;

let graph, height, y, color = undefined;//(data.nodes.length - 1) * step + margin.top + margin.bottom;

let buildGraph = () => {
    const nodes = data.nodes.map(({id, type, props}) => ({
        id,
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

//let graph = buildGraph();

//let y = d3.scalePoint(graph.nodes.map(d => d.id).sort(d3.ascending), [margin.top, height - margin.bottom])
//let color = d3.scaleOrdinal(graph.nodes.map(d => d.type).sort(d3.ascending), d3.schemeCategory10)

let firstSelection = undefined;
let lastSelection = undefined;
let svg = undefined;
let zoomTransform = undefined;
let link_callback, relations_callback = undefined;

export function setData(chartData){
    data = chartData;
    height = (data.nodes.length - 1) * 2*step + margin.top + margin.bottom;
    graph = buildGraph();
    y = d3.scalePoint(graph.nodes.map(d => d.id).sort(d3.ascending), [margin.top, height - margin.bottom])
    color = d3.scaleOrdinal(graph.nodes.map(d => d.type).sort(d3.ascending), d3.schemeCategory10)
}

export function chart(chartData, link_cb, relations_cb) {
    setData(chartData);
    link_callback = link_cb;
    relations_callback = relations_cb;
    svg = d3.select("svg").attr("viewBox", [0, 0, 400, height]);
    update();
    return svg.node();
}

/**Reset the SVG element, i.e., remove all children and add all required styles and definitions.
 * */
function reset(){
    //clear all
    svg.selectAll("*").remove();
    //add styles for hover effects
    svg.append("style").text(`
.hover path {
  stroke: #ccc;
}

.hover text {
  fill: #ccc;
}

.hover g.primary text {
  fill: black;
  font-weight: bold;
}

.hover g.secondary text {
  fill: #333;
}

.hover path.primary {
  stroke: #333;
  stroke-opacity: 1;
}

g.selected text{
    fill: red;
    font-weight: bold;
}

.tooltip {
  background:#fefabc;
  pointer-events: none;
  border: 1px solid #cccccc;
  padding: 5px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.3);
  border-radius: 10px;
  }
  
.first_node {
  stroke: #00FF00;
  stroke-opacity: 1;
  stroke-width: 2;
 }
 
 .second_node {
  stroke: #FF0000;
  stroke-opacity: 1;
  stroke-width: 2;
 }
`);

    //add defs for selection mark
    let defs = svg
        .join("defs");

    defs
        .append('marker')
        .attr('id', 'arrow')
        .attr('viewBox', [0, 0, 40, 40])
        .attr('refX', 20)
        .attr('refY', 20)
        .attr('markerWidth', 40)
        .attr('markerHeight', 40)
        .attr('orient', 'reverse')
        .append('path')
        .attr("fill", "#444")
        .attr("stroke-opacity", 0.6)
        .attr("stroke-width", 0.5)
        .attr('stroke', "#444")
        .attr('d', 'M0,0Q15,0,20,10,15,20,0,20A1,1,0,000,0')//d3.line()([[0, 0], [0, 20], [20, 10]]))
        .attr('transform', 'scale(2)')

    defs
        .append("svg:marker")
        .attr("id", "triangle")
        .attr("refX", 6)
        .attr("refY", 6)
        .attr("markerWidth", 30)
        .attr("markerHeight", 30)
        .attr("markerUnits","userSpaceOnUse")
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M 0 0 12 6 0 12 3 6")
        .style("fill", "black");

    let grads = defs.selectAll("radialGradient")
        .data(graph.nodes)
        .enter()
        .append("radialGradient")
        .attr("gradientUnits", "objectBoundingBox")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", "100%")
        .attr("id", function(d, i) { return "grad" + i; });

    grads.append("stop")
        .attr("offset", "0%")
        .style("stop-color", "white");

    grads.append("stop")
        .attr("offset", "100%")
        .style("stop-color",  function(d) { return color(d.type); });

    //clear all selections
    firstSelection = undefined;
    lastSelection = undefined;
}

/**Update aka. redraw the SVG based on the graph data.
 */
export function update() {
    reset();
    //draw label layer
    const label = svg.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "end")
        .selectAll("g")
        .data(graph.nodes)
        .join("g")
        .call(g => g.append("text")
            .attr("x", margin.left -12)
            .attr("y", d => d.y = y(d.id))
            .attr("fill", d => d3.lab(color(d.type)).darker(2))
            .text(d => d.id));

    //draw links layer
    const path = svg.insert("g", "*")
        .attr("fill", "none")
        .attr("stroke-opacity", 0.6)
        .attr("stroke-width", 0.5)
        .selectAll("path")
        .data(graph.links)
        .join("path")
        .attr("stroke", d => color(d.relationType))
        .attr("d", arc);

    //tooltip div
    let tip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    let options = d3.select("body").append("div").attr("class", "tooltip").style("opacity", 0);

    let select = options.append("select").attr("id", "relationType");
    select.append("option").attr("value", "first").text("test1");
    select.append("option").attr("value", "second").text("test2")

    //draw hover overlay layer
    const overlay = svg.append("g")
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .selectAll("rect")
        .data(graph.nodes)
        .join("rect")
        .attr("width", margin.left - 8)
        .attr("height", step-2)
        .attr("y", d => y(d.id) - step / 2)
        .on("mouseover", (e, d) => {
            //show hover effects on connections
            svg.classed("hover", true);
            label.classed("primary", n => n === d);
            label.classed("secondary", n => n.sourceLinks.some(l => l.target === d) || n.targetLinks.some(l => l.source === d));
            path.classed("primary", l => l.source === d || l.target === d)
                .filter(".primary").raise();

            path.attr('stroke-linecap', 'round')
            .filter(".primary")
          //  .attr("marker-start", 'url(#arrow)')
            .attr("marker-end", 'url(#triangle)');
            tip.style("opacity", 1)
                .html("Incoming: " + d.targetLinks.length + "<br/> Outgoing: " + d.sourceLinks.length)
                .style("left", (e.pageX-25) + "px")
                .style("top", (e.pageY-75) + "px")
            relations_callback(d.sourceLinks, d.targetLinks);
        })
        .on("mouseout", e => {
            //hide hover effects on connections
            svg.classed("hover", false);
            label.classed("primary", false);
            label.classed("secondary", false);
            path.classed("primary", false).order();
            path.attr('stroke-linecap', 'round')
                //.attr("marker-start", 'none')
                .attr("marker-end", 'none');
            tip.style("opacity", 0)
                .style("left", "0px")
                .style("top", "0px")
        });

    //draw circles (last to allow them to be clicked, otherwise, overlay will catch all events)
    let circles = svg.append("g")
        .selectAll("circle")
        .data(graph.nodes)
        .join("circle")
        .attr("fill", function(d, i) {
            return "url(#grad" + i + ")";
        })
        .attr("cx", d => {d.x = margin.left;return d.x})
        .attr("cy", d => {d.y = y(d.id); return d.y})
        .attr("r", 8)
        .on("click", (e, d) => selectNode(e,d))
        .on("mouseover", (e, d) => {
            //show tooltip and place next to focussed circle
           /* tip.style("opacity", 1)
                .html(propsToHtml(d.props))
                .style("left", (e.pageX-25) + "px")
                .style("top", (e.pageY-75) + "px")*/
          /*  options.style("opacity", 1)
                .style("left", "500px")
                .style("top", "900px")*/

            //fillInfoBox(infoBox, d.props);
            circles.attr("r", n => { return ( n === firstSelection|| n === lastSelection || n === d)? 10 : 8});
        }).on("mouseout", e => {
            //hide tooltip and move out of viewport to avoid receiving mouse over event
            tip.style("opacity", 0)
                .style("left", "0px")
                .style("top", "0px")
           // fillInfoBox(infoBox, undefined);
            circles.attr("r", n => { return ( n === firstSelection|| n === lastSelection)? 10 : 8});
        }).on("click", (e, d) => {
                //first selection done, check for unselect
                if (firstSelection === d) {
                    //already selected, unselect and return
                    firstSelection = undefined;
                } else if (lastSelection === d) {
                    //no unselect, select second node
                    lastSelection = undefined;
                }else{
                    if (firstSelection) {
                        lastSelection = d;
                    }else{
                        firstSelection = d;
                    }
                }

                link_callback(firstSelection, lastSelection);

            circles.classed("first_node", n => n === firstSelection );
            circles.classed("second_node", n =>  n === lastSelection);

            circles.attr("r", n => { return ( n === firstSelection|| n === lastSelection)? 10 : 8});

        });

   /* const infoBox = svg.append("g");

    infoBox.append('rect')
        .attr("fill", "#fefabc")
        //.classed('notice-box', true)
        .attr("stroke", "#444444")
        .attr("stroke-opacity", 0.6)
        .attr("stroke-width", 0.5)
        .attr('x', 400)
        .attr('y', -100)
        .attr('width', 240)
        .attr('height', 400);
*/
    svg.call(d3.zoom()
        .extent([[0,0], [640, height]])
        .scaleExtent([0, 8])
        .on("zoom", zoomed));

    function zoomed({transform}) {
        zoomTransform = {transform};
        label.attr("transform", transform);
        path.attr("transform", transform);
        overlay.attr("transform", transform);
        circles.attr("transform", transform);
    }

}

function fillInfoBox(infoBox, props ){
    infoBox.selectAll("circle").remove();
    infoBox.selectAll("text").remove();
    if(!props) return;
    let keys = Object.keys(props);
    for(let i=0;i< keys.length;i++){
        let value = props[keys[i]];
        infoBox.append("text").attr("x", 410).attr("y", i*20 - 80).text(keys[i] + " : " + value).style("font-size", "12px").attr("alignment-baseline","middle")

    }
}

function propsToHtml(props){
    let result = "";
    let keys = Object.keys(props);
    for(let i=0;i< keys.length;i++){
        let value = props[keys[i]];
        result += keys[i] + ":" + value + "<br/>";
    }
    return result;
}

/**Function for creating an arc between two nodes.
 */
function arc(d) {
    const y1 = d.source.y;
    const y2 = d.target.y;

    const r = Math.abs(y2 - y1) / 2;
    return `M${margin.left + 12},${y1}A${r},${r} 0,0,${y1 < y2 ? 1 : 0} ${margin.left + 12},${y2}`;
}


