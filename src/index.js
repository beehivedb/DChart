import {BarChart} from './barchart'

var bc = new BarChart({
    container: "#root", 
    width : 800,
    height: 600
});
var dataset = [{name: "red", value: 11}, {name: "green", value: 20}, {name: "blue", value: 33}, {name: "black", value: 44}, {name: "yellow", value: 55}, {name: "write", value: 66} ];
bc.data(dataset, "name", "value").render();
