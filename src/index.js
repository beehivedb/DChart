import {BarChart} from './chart'

var bc = new BarChart({
    container: "#root", 
    width : 800,
    height: 600
});
var dataset = [10,20,30,23,13,40,27,35,20];
bc.data(dataset).render();
