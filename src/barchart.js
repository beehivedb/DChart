import {Chart} from './chart'
import * as d3 from 'd3'

export class BarChart extends Chart{
    constructor(config){
        super(config);
    }

    render(){
        let dataset = this.getData();
        let marge = this.$marge;

        let xScale = d3.scaleBand()
        .domain(dataset.keys)
        .rangeRound([0, this.$width - marge.left - marge.right])
        .padding(0.2);

        let xAxis = d3.axisBottom(xScale)

        let yScale = d3.scaleLinear()
        .domain([dataset.min, dataset.max])
        .range([this.$height - marge.top - marge.bottom, 0]);

        let yAxis =  d3.axisLeft(yScale);

        this.$chart.append("g").attr("fill", "steelblue")
            .selectAll("rect")
            .data(dataset.data)
            .join("rect")
            .attr("x", d=> xScale(d[`${dataset.key}`]))
            .attr("y", d=> yScale(d[`${dataset.value}`]))
            .attr("width", xScale.bandwidth() )
            .attr("height", d=> yScale(0) - yScale(d[`${dataset.value}`]) - marge.bottom - marge.top);

        this.$chart.append("g").attr("transform", `translate(0, ${this.$height - marge.bottom - marge.top})`).call(xAxis);
        this.$chart.append("g").call(yAxis);
    }
}