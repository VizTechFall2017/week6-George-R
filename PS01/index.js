var data = [
{"year":1,"HomeRuns":16, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":2,"HomeRuns":25,"Awards": "N/A", "obp":329 , "ops":.821, "war":5.8, "walk": 54, "avg": 261, "RBI": 59},
{"year":3,"HomeRuns":24, "Awards": "N/A", "obp":368 , "ops":.859, "war":6.2, "walk": 72, "avg": 283, "RBI": 58},
{"year":4,"HomeRuns":19, "Awards": "N/A", "obp":351 , "ops":.777, "war":8.0, "walk": 93, "avg": 248, "RBI": 58},
{"year":5,"HomeRuns":33, "Awards": "All-Star, Golden Glove, Silver Slugger, MVP", "obp":406 , "ops":.970, "war":9.7, "walk": 93, "avg": 301, "RBI": 114},
{"year":6,"HomeRuns":25, "Awards": "Golden Glove, Silver Slugger", "obp":410 , "ops":.924, "war":7.9, "walk": 107, "avg": 292, "RBI": 116},
{"year":7,"HomeRuns":34, "Awards": "All-Star, Golden Glove, Silver Slugger, MVP", "obp":456 , "ops":1.080, "war":9.0, "walk": 127, "avg": 311, "RBI": 103},
{"year":8,"HomeRuns":46, "Awards": "All-Star, Golden Glove, Silver Slugger, MVP", "obp":458 , "ops":1.136, "war":9.9, "walk": 126, "avg": 336, "RBI": 123},
{"year":9,"HomeRuns":37, "Awards": "All-Star, Golden Glove, Silver Slugger", "obp":426 , "ops":1.073, "war":6.2, "walk": 74, "avg": 312, "RBI": 81},
{"year":10,"HomeRuns":33, "Awards": "All-Star", "obp":431 , "ops":1.009, "war":7.5, "walk": 120, "avg": 294, "RBI": 104},
{"year":11,"HomeRuns":42, "Awards": "All-Star, Golden Glove, Silver Slugger", "obp":461 , "ops":1.076, "war":9.6, "walk": 151, "avg": 308, "RBI": 129},
{"year":12,"HomeRuns":40, "Awards": "All-Star, Golden Glove, Silver Slugger", "obp":446 , "ops":1.031, "war":8.1, "walk": 145, "avg": 291, "RBI": 101},
{"year":13,"HomeRuns":37, "Awards": "All-Star, Golden Glove", "obp":438 , "ops":1.047, "war":8.1, "walk": 130, "avg": 303, "RBI": 122},
{"year":14,"HomeRuns":34, "Awards": "All-Star", "obp":389 , "ops":1.006, "war":3.8, "walk": 73, "avg": 262, "RBI": 83},
{"year":15,"HomeRuns":49, "Awards": "All-Star, Silver Sluger", "obp":440 , "ops":1.127, "war":7.7, "walk": 117, "avg": 306, "RBI": 106},
{"year":16,"HomeRuns":73, "Awards": "All-Star, Silver Sluger, MVP", "obp":515 , "ops":1.379, "war":11.9, "walk": 177, "avg": 328, "RBI": 137},
{"year":17,"HomeRuns":46, "Awards": "All-Star, Silver Sluger, MVP", "obp":582 , "ops":1.381, "war":11.8, "walk": 198, "avg": 370, "RBI": 110},
{"year":18,"HomeRuns":45, "Awards": "All-Star, Silver Sluger, MVP", "obp":529 , "ops":1.278, "war":9.2, "walk": 148, "avg": 341, "RBI": 90},
{"year":19,"HomeRuns":45, "Awards": "All-Star, Silver Sluger, MVP", "obp":609 , "ops":1.422, "war":10.6, "walk": 232, "avg": 362, "RBI": 101},
{"year":20,"HomeRuns":5, "Awards": "N/A", "obp":404 , "ops":1.071, "war":0.6, "walk": 9, "avg": 286, "RBI": 10},
{"year":21,"HomeRuns":26, "Awards": "N/A", "obp":454 , "ops":.999, "war":4.0, "walk": 115, "avg": 270, "RBI": 77},
{"year":22,"HomeRuns":28, "Awards": "N/A", "obp":480 , "ops":1.045, "war":3.4, "walk": 132, "avg": 276, "RBI": 66}

];

var margin = {top: 20, right: 30, bottom: 70, left: 90};

var width = 950 - margin.left - margin.right;
var height = 600 - margin.top - margin.bottom;

var x = d3.scale.linear()
	.domain([0,23])
    .range([0, width]);

var y = d3.scale.linear()
	.domain([0,75])
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var svg =	d3.select("body")
			.append("svg")
			.attr("class", "chart")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom);

var HomeRuns = svg.append("text")
		      .attr("transform", "rotate(-90)")
		      .attr("y", 50)
		      .attr("x", -300)
		      .text("Home Runs");

var year = svg.append("text")
		      .attr("y", 580)
		      .attr("x", 500)
		      .text("Year");

var ref = svg.append("text")
							      .attr("y", 580)
							      .attr("x", 800)
										.style("font-size", "10px")
							      .text("baseball-reference.com");

										var title = svg.append("text")
																									.attr("y", 50)
																									.attr("x", 270)
																									.style("font-size", "30px")
																									.text("Barry Bonds HRs by Season");


var chart = svg
			.append("g")
			.attr("width", 1000)
			.attr("height", 600)
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);


chart.append("g")
  .attr("class", "y axis")
  .call(yAxis);


var colorScale = d3.scale.linear()
    .range(['#000000', '#B8860B'])
    .domain([10, 70]);

var Tool = d3.select("body")

                      .append("div")
                      .attr("class", "mytooltip")
                      .style("opacity", "0.6")
                      .style("display", "none");


var bars = chart.selectAll(".bar")
	      .data(data)
		    .enter().append("rect")
		      .attr("class", "bar")
		      .style("fill", function(d) { return colorScale(d.HomeRuns)})
		      .attr("x", function(d) { return x(d.year) - 10; })
		      .attr("width", 20)
		      .attr("y", function(d) { return y(d.HomeRuns); })
		      .attr("height", function(d) { return height - y(d.HomeRuns); })
		      .on("mouseover", function(d){
		  		d3.select(this)
		  			.transition()
		  			.duration(500)
		  			.attr("x", function(d) { return x(d.year) - 20; })
		  			.style("cursor", "pointer")
		  			.attr("width", 40)
            .style("fill", "#F5F5DC")
		  			Tool
                      .transition()
                      .duration(1000)
                      .style("opacity", "1")
                      .style("display", "block")






                    Tool
										.html(
																	"<br/> Avg: ."
																	+d.avg
																	+"<br/> RBIs: "
																							+ d.RBI
																																												+ "<br/> HRs: "
																																												+ d.HomeRuns
																																												+"<br/> Awards: "
																																												+ d.Awards)

                      .style("right", (d3.event.pageX) + d3.event.pageX )
                      .style("top", (d3.event.pageY) + d3.event.pageY)




		      })
		      .on("mouseout", function(d){
		  		d3.select(this)
		  			.transition()
		  			.duration(490)
            .style("fill", function(d) { return colorScale(d.HomeRuns)})
		  			.attr("x", function(d) { return x(d.year) - 10; })
		  			.style("cursor", "normal")
		  			.attr("width", 20)
		  			Tool.transition()
                        .duration(500)
                        .style("opacity", "1")
                        .style("display", "block")

		      });
