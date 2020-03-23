import * as d3 from 'd3'

class Chart {

    constructor(config){
        this.getConfig = function(key, def){
            if(config && config.hasOwnProperty(key)){
                return config[key];
            }
            return def;
        }
        this.$width = this.getConfig("width", 400);

        this.$height = this.getConfig("height", 400);

        this.$svg = d3.select(this.getConfig("container", "#dchart")).append("svg").attr('width',  this.$width).attr('height', this.$height);

        this.$marge = {
            top: this.getConfig("top", 20),
            left: this.getConfig("left", 30),
            right: this.getConfig("right", 30),
            bottom: this.getConfig("bottom", 20)
        }

        this.$chart = this.$svg.append("g")
            .attr("width", this.$width - this.$marge.left - this.$marge.right)
            .attr("height", this.$height - this.$marge.bottom - this.$marge.top)
            .attr("transform", `translate(${this.$marge.left}, ${this.$marge.top})`);
    }

    data(d){
        this.getData = function(){
            return {
                data: d,
                max : d3.max(d),
                min : d3.min(d)
            }
        }
        return this;
    }
}

class BarChart extends Chart{
    constructor(config){
        super(config);
    }

    render(){
        let dataset = this.getData();
        let width = this.$width;
        let height = this.$height;
        let marge = this.$marge;

        function xAxis(){
            let xScale = d3.scaleBand()
            .domain(d3.range(dataset.length))
            .rangeRound([0, width - marge.left - marge.right]);
            return d3.axisBottom(xScale);
        }

        function yAxis(){
            let yScale = d3.scaleLinear()
            .domain([dataset.min, dataset.max])
            .range([height - marge.top - marge.bottom, 0]);
            return d3.axisLeft(yScale);
        }

        this.$chart.append("g").attr("transform", `translate(0, ${height - marge.bottom - marge.top})`).call(xAxis());
        this.$chart.append("g").call(yAxis());
    }
}

export {
    BarChart
}