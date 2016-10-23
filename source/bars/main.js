var s = Snap("#bar_chart");
var button_1 = Snap("#button_1");
var button_2 = Snap("#button_2");

//create button
button_1.rect(30, 0, 100, 30, 10).attr({fill:"#fff",stroke:"#000"});

//create 2nd button by cloning the 1st
button_2 = button_1.clone();

//add text to buttons
var label_1 = button_1.text(50, 20,"Product 1");
var label_2 = button_2.text(50, 20,"Product 2");

//create x and y axes
var vertical = s.path("M45 10 V 212");
var horizontal = s.path("M45 210 H 360");

//put both axes into one group
var axes = s.group(vertical, horizontal);
//apply stroke to both axes at once via the group
axes.attr({
        stroke: "#000",
        strokeWidth: 5
    });

//add increment labels
var vertical_1 = s.text(10, 200,"0");
var vertical_2 = s.text(5, 155,"25%");
var vertical_3 = s.text(5, 110,"50%");
var vertical_4 = s.text(5, 65,"75%");
var vertical_5 = s.text(0, 20,"100%");

var horizontal_1 = s.text(70, 230,"2010");
var horizontal_2 = s.text(130, 230,"2011");
var horizontal_3 = s.text(190, 230,"2012");
var horizontal_4 = s.text(250, 230,"2013");
var horizontal_5 = s.text(310, 230,"2014");

//create bars
var bar1 = s.rect(60, 10, 50, 190, 10).attr({
    fill: "#bada55"
});

var bar2 = s.rect(120, 40, 50, 160, 10).attr({
    fill: "#5767bf"
});

var bar3 = s.rect(180, 130, 50, 70, 10).attr({
    fill: "#ffec64"
});

var bar4 = s.rect(240, 110, 50, 90, 10).attr({
    fill: "#a1a0a0"
});

var bar5 = s.rect(300, 90, 50, 110, 10).attr({
    fill: "#00b5e8"
});

//put the 5 bars into one group
var bars = s.group(bar1, bar2, bar3, bar4, bar5);
//apply stroke to all bars at once via the group
bars.attr({
    stroke: "#000",
    strokeWidth: 2
});

//add click event listeners
button_1.click(function () {
  bar1.animate({height:50, y:150}, 2000);
  bar2.animate({height:100, y:100}, 2000);
  bar3.animate({height:180, y:20}, 2000);
  bar4.animate({height:20, y:180}, 2000);
  bar5.animate({height:60, y:140}, 2000);
         });

button_2.click(function () {
  bar1.animate({height:190, y:10}, 2000);
  bar2.animate({height:160, y:40}, 2000);
  bar3.animate({height:70, y:130}, 2000);
  bar4.animate({height:90, y:110}, 2000);
  bar5.animate({height:110, y:90}, 2000);
         });
