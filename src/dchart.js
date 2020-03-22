import * as d3 from 'd3'

function createSvg(container, width, height, top, left){
    let svg = d3.select(container).append("svg").attr("width", width).attr("height", height);
    return svg.append("g").attr("transform", `"translate(${top}, ${left})`);
}

function createAxis(dataset, width, height, left, right, top, bottom){
    let xScale = d3.scaleBand().domain(d3.range(dataset.length)).rangeRound(0, width - left, - right);
    let xAxis = d3.axisBottom(xScale);

    let yScale = d3.scaleLinear().domain([0, d3.max(dataset)]).range([height - top - bottom, 0]);
    let yAxis = d3.axisLeft(yScale);
    return {xAxis, yAxis};
}

class BarChart{

    constructor(conf){
        let marge = {top: 60, bottom: 60, left: 60, right: 60};
        Object.assign(this, conf, marge);
    }

    data(d){
        this.dataset = d;
        return this;
    }
    
    render() {
        let root = createSvg(this.container, this.width, this.height, this.top, this.left);
        let axis = createAxis(this.dataset, this.width, this.height, this.left, this.right, this.top, this.bottom);
        root.call(axis.xAxis).call(axis.yAxis);

    }
}

export {
    BarChart
}