import * as d3 from 'd3'

export class Chart {

    constructor(config){
        this.getConfig = function(key, def){
            if(config && config.hasOwnProperty(key)){
                return config[key];
            }
            return def;
        }
        this.$width = this.getConfig("width", 400);

        this.$height = this.getConfig("height", 400);

        this.$svg = d3.select(this.getConfig("container", "#dchart"))
            .append("svg")
            .attr('width',  this.$width)
            .attr('height', this.$height)
            .attr('viewBox', [0, 0, this.$width, this.$height]);

        this.$marge = {
            top: this.getConfig("top", 20),
            left: this.getConfig("left", 40),
            right: this.getConfig("right", 0),
            bottom: this.getConfig("bottom", 30)
        }

        this.$chart = this.$svg.append("g")
            .attr("width", this.$width - this.$marge.left - this.$marge.right)
            .attr("height", this.$height - this.$marge.bottom - this.$marge.top)
            .attr("transform", `translate(${this.$marge.left}, ${this.$marge.top})`);
    }

    data(data, key, value){
        if(data == undefined || key == undefined || value == undefined){
            throw "Data Or Name Key Or Value Key Must Be UnNull.";
        }

        let keys = data.map(o => o[key]);
        let values = data.map(o => o[value]);

        this.getData = function(){
            return {
                data,
                keys,
                values,
                max : d3.max(values),
                min : d3.min(values),
                key,
                value
            }
        }
        return this;
    }
}
