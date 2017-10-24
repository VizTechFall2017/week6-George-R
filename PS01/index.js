var width = d3.select('svg').attr('width');
var height = d3.select('svg').attr('height');

var marginLeft = 100;
var marginTop = 100;

var nestedData = [];

var svg = d3.select('svg')
    .append('g')
    .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');

//these are the size that the axes will be on the screen; set the domain values after the data loads.
var scaleX = d3.scaleBand().rangeRound([0, 800]).padding(0.1);
var scaleY = d3.scaleLinear().range([400, 0]);

var div = d3.select(".svg-container").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);


//import the data from the .csv file
d3.csv('./shotdistteam.csv', function(dataIn){

    nestedData = d3.nest()
        .key(function(d){return d.year})
        .entries(dataIn);

    var loadData = nestedData.filter(function(d){return d.key == '2016'})[0].values;

    scaleX.domain(loadData.map(function(d){return d.teamCode;}));
    scaleY.domain([0, d3.max(loadData.map(function(d){return +d.three}))]);

    // Add the x Axis
    svg.append("g")
        .attr('transform','translate(0,400)')  //move the x axis from the top of the y axis to the bottom
        .call(d3.axisBottom(scaleX));

    svg.append("g")
        .attr('class','yaxis')
        .call(d3.axisLeft(scaleY));

/*
    svg.append('text')
        .text('Weekly income by age and gender')
        .attr('transform','translate(300, -20)')
        .style('text-anchor','middle');

    svg.append('text')
        .text('age group')
        .attr('transform','translate(260, 440)');

    svg.append('text')
        .text('weekly income')
        .attr('transform', 'translate(-50,250)rotate(270)');

        */

    //bind the data to the d3 selection, but don't draw it yet
    svg.selectAll('rect')
        .data(loadData)
        .enter()
        .append('rect')
        .attr('class','bars')
        .attr('fill', "darkorange");

    //call the drawPoints function below, and hand it the data2016 variable with the 2016 object array in it
    drawPoints(loadData);

});

//this function draws the actual data points as circles. It's split from the enter() command because we want to run it many times
//without adding more circles each time.
function drawPoints(pointData){

    scaleY.domain([0, d3.max(pointData.map(function(d){return +d.three}))]);

    svg.selectAll('.yaxis')
        .call(d3.axisLeft(scaleY));

    svg.selectAll('rect')
        .data(pointData)
        .attr('x',function(d){
            return scaleX(d.teamCode);
        })
        .attr('y',function(d){
            return scaleY(d.three);
        })
        .attr('width',function(d){
            return scaleX.bandwidth();
        })
        .attr('height',function(d){
            return 400 - scaleY(d.three);  //400 is the beginning domain value of the y axis, set above
        });

}


          svg.append("text")
               .attr("x", 250)
               .attr("y", -50)
               .attr("font-size", 24)
               .text("3-Point Field Goal Attempts");




          svg.append("text")
              .attr("x", 400)
              .attr("y", 440)
              .attr("font-size", 13)
              .attr("text-anchor", "middle")
              .text("Team");



          svg.append("text")
               .attr("transform", "rotate(270)")
               .attr("x", -200)
               .attr("y", -60)
               .attr("font-size", 13)
               .attr("text-anchor", "middle")
               .text("3pt FG%");



function updateData(selectedYear){
    return nestedData.filter(function(d){return d.key == selectedYear})[0].values;
}


//this function runs when the HTML slider is moved
function sliderMoved(value){

    newData = updateData(value);
    drawPoints(newData);

}
