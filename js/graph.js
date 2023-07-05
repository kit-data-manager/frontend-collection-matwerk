let data = {
    "nodes": [
        {"id": "1234", "group": 1},
        {"id": "345", "group": 2},
        {"id": "753", "group": 2},
        {"id": "7745", "group": 1},
        {"id": "1344", "group": 3}
    ],
    "links": [
        /*{source: "1234", target: "753", value: 1},
        {source: "1234", target: "7745", value: 2},
        {source: "1344", target: "345", value: 13}*/
    ]
}
let margin = ({top: 20, right: 20, bottom: 20, left: 100});
let step = 28;
let height = (data.nodes.length - 1) * step + margin.top + margin.bottom;
let graph = undefined;

let buildGraph = () => {
    const nodes = data.nodes.map(({id, group}) => ({
        id,
        sourceLinks: [],
        targetLinks: [],
        group
    }));

    const nodeById = new Map(nodes.map(d => [d.id, d]));

    const links = data.links.map(({source, target, value}) => ({
        source: nodeById.get(source),
        target: nodeById.get(target),
        value
    }));

    for (const link of links) {
        const {source, target, value} = link;
        source.sourceLinks.push(link);
        target.targetLinks.push(link);
    }

    return {nodes, links};
}
let firstSelection = undefined;
let lastSelection = undefined;

graph = buildGraph();

let y = d3.scalePoint(graph.nodes.map(d => d.id).sort(d3.ascending), [margin.top, height - margin.bottom])
let color = d3.scaleOrdinal(graph.nodes.map(d => d.group).sort(d3.ascending), d3.schemeCategory10)
let svg = undefined;

export function chart() {
    svg = d3.select("svg").attr("viewBox", [0, 0, 640, height]);

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

`);

    update();

    return svg.node();
}

function update() {
    firstSelection = undefined;
    lastSelection = undefined;

    svg.selectAll("g > *").remove();

        let defs = svg.select("defs").append("g")
            .attr('id', 'pointer')
            .attr('transform', 'scale(0.8)');
        defs.append('path')
            .attr('d', 'M0-1c-14.5-25.6-14.5-25.7-14.5-33.8c0-8.1,6.5-14.6,14.5-14.6s14.5,6.6,14.5,14.6C14.5-26.7,14.5-26.6,0-1z');
        defs.append('path')
            .attr('d', 'M0-49c7.7,0,14,6.3,14,14.1c0,8,0,8.1-14,32.8c-14-24.7-14-24.9-14-32.8C-14-42.7-7.7-49,0-49 M0-50c-8.3,0-15,6.8-15,15.1 S-15-26.5,0,0c15-26.5,15-26.5,15-34.9S8.3-50,0-50L0-50z');

    const label = svg.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 14)
        .attr("text-anchor", "end")
        .selectAll("g")
        .data(graph.nodes)
        .join("g")
        .attr("transform", d => `translate(${margin.left},${d.y = y(d.id)})`)
        .call(g => g.append("text")
            .attr("x", -12)
            .attr("dy", "0.35em")
            .attr("fill", d => d3.lab(color(d.group)).darker(2))
            .text(d => d.id));

    const path = svg.insert("g", "*")
        .attr("fill", "none")
        .attr("stroke-opacity", 0.6)
        .attr("stroke-width", 1.5)
        .selectAll("path")
        .data(graph.links)
        .join("path")
        .attr("stroke", d => d.source.group === d.target.group ? color(d.source.group) : "#aaa")
        .attr("d", arc);

    const overlay = svg.append("g")
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .selectAll("rect")
        .data(graph.nodes)
        .join("rect")
        .attr("width", margin.left + 40)
        .attr("height", step)
        .attr("y", d => y(d.id) - step / 2)
        .on("mouseover", (e, d) => {
            svg.classed("hover", true);
            label.classed("primary", n => n === d);
            label.classed("secondary", n => n.sourceLinks.some(l => l.target === d) || n.targetLinks.some(l => l.source === d));
            path.classed("primary", l => l.source === d || l.target === d).filter(".primary").raise();
        })
        .on("mouseout", e => {
            svg.classed("hover", false);
            label.classed("primary", false);
            label.classed("secondary", false);
            path.classed("primary", false).order();
        });

    svg.append("g")
        .selectAll("circle")
        .data(graph.nodes)
        .join("circle")
        .attr("transform", d => `translate(${margin.left},${d.y = y(d.id)})`)
        .attr("r", 6)
        .attr("fill", d => color(d.group))
        .on("click", (e, d) => {
            let color = "#00FF00";
            console.log("CLICK");
            if (firstSelection) {
                //second one
                color = "#FF0000";
                lastSelection = d;
            } else {
                firstSelection = d;
            }

            var pointer = svg
                .append("use")
                .attr("fill", color)
                .attr("stroke", "#000000")
                .attr("stroke-width", "1px")
                .attr("href", "#pointer")
                .attr("transform", "translate(0,0) scale(0)");

            pointer
                .transition()
                .duration(500)
                .on("end", () => {
                    if (firstSelection && lastSelection) {
                        //store connection
                        let link = {source: firstSelection.id, target: lastSelection.id, value: 3};
                        data.links.push(link);
                        graph = buildGraph();
                        //repaint
                        firstSelection = undefined;
                        lastSelection = undefined;

                        update();
                    }

                })
                .attr("x", margin.left)
                .attr("y", y(d.id))
                .attr("transform", "scale(1)");
        });
}


function arc(d) {
    const y1 = d.source.y;
    const y2 = d.target.y;
    const r = Math.abs(y2 - y1) / 2;
    return `M${margin.left},${y1}A${r},${r} 0,0,${y1 < y2 ? 1 : 0} ${margin.left},${y2}`;
}


