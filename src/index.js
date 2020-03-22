import {BarChart} from './dchart'

var bc = new BarChart({
    container: "#root", 
    width : 200,
    height: 200
});
var dataset = [10,20,30,23,13,40,27,35,20];
bc.data(dataset).render();
