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

export function chart() {
    const svg = d3.select("svg").attr("viewBox", [0, 0, 640, height]);//.on("mousedown", mousedown).on("mouseup", mouseup);

    //graph = buildGraph();

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
    graph = buildGraph();

    let y = d3.scalePoint(graph.nodes.map(d => d.id).sort(d3.ascending), [margin.top, height - margin.bottom])
    let color = d3.scaleOrdinal(graph.nodes.map(d => d.group).sort(d3.ascending), d3.schemeCategory10)

    let firstSelection = undefined;
    let lastSelection = undefined;


    update();

    function update() {
        svg.selectAll("g > *").remove();
        graph = buildGraph();

       function drag(){

            function dragstarted(event, d) {
            d3.select(this).raise().attr("stroke", "black");
        }

        function dragged(event, d) {
            d3.select(this).attr("cx", d.x = event.x).attr("cy", d.y = event.y);
        }

        function dragended(event, d) {
            d3.select(this).attr("stroke", null);
        }

        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }
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
                .text(d => d.id))
            .call(g => g.append("circle")
                .attr("r", 6)
                .attr("fill", d => color(d.group)))
            .call(drag);



        const path = svg.insert("g", "*")
            .attr("fill", "none")
            .attr("stroke-opacity", 0.6)
            .attr("stroke-width", 1.5)
            .selectAll("path")
            .data(graph.links)
            .join("path")
            .attr("stroke", d => d.source.group === d.target.group ? color(d.source.group) : "#aaa")
            .attr("d", arc);


        /*const overlay = svg.append("g")
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
            }).on("mousedown", (e, d) => {
                firstSelection = d;
                //label.classed("secondary", n => n.sourceLinks.some(l => l.target === d) || n.targetLinks.some(l => l.source === d));
                // path.classed("primary", l => l.source === d || l.target === d).filter(".primary").raise();
            }).on("mouseout", (e, d) => {
                lastSelection = d;
                //label.classed("secondary", n => n.sourceLinks.some(l => l.target === d) || n.targetLinks.some(l => l.source === d));
                // path.classed("primary", l => l.source === d || l.target === d).filter(".primary").raise();
            });*/

     /*   updateOrder();

        function updateOrder() {
            y.domain(graph.nodes.sort((a,b) =>{return a.group - b.group;}).map(d => d.id));

            const t = svg.transition()
                .duration(750);

            label.transition(t)
                .delay((d, i) => i * 20)
                .attrTween("transform", d => {
                    const i = d3.interpolateNumber(d.y, y(d.id));
                    return t => `translate(${margin.left},${d.y = i(t)})`;
                });

            path.transition(t)
                .duration(750 + graph.nodes.length * 20)
                .attrTween("d", d => () => arc(d));

            overlay.transition(t)
                .delay((d, i) => i * 20)
                .attr("y", d => y(d.id) - step / 2);
        }*/

    }



   /* let line = undefined;
    function mousedown(e) {
        var m = d3.pointer(e);

        line = svg.append("line")
            .attr("stroke", "#000")
            .attr("stroke-width", 2.5)
            .attr("x1", m[0])
            .attr("y1", m[1])
            .attr("x2", m[0])
            .attr("y2", m[1]);
        svg.on("mousemove", mousemove);
    }*/

    /*function mousemove(e) {
        var m = d3.pointer(e);

        line.attr("x2", m[0])
            .attr("y2", m[1]);
    }

    function mouseup(e) {
        svg.on("mousemove", null);
        console.log("Connect " + firstSelection.id + " - " + lastSelection.id);
        let link = {source:firstSelection.id, target: lastSelection.id, value: 10 };
        // {source: "1344", target: "345", value: 13}
        data.links.push(link);
         firstSelection = undefined;
         lastSelection = undefined;

        svg.selectAll("line").remove();

        update();
    }*/



    //viewof order.addEventListener("input", update);
    //invalidation.then(() => viewof order.removeEventListener("input", update));

    return svg.node();
}

function arc(d) {
    const y1 = d.source.y;
    const y2 = d.target.y;
    const r = Math.abs(y2 - y1) / 2;
    return `M${margin.left},${y1}A${r},${r} 0,0,${y1 < y2 ? 1 : 0} ${margin.left},${y2}`;
}


