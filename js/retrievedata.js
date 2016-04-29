// window load event listener for chart for results page
window.addEventListener("load", function() {

var retrieve = localStorage.getItem('neighborhoods');
  if (retrieve != null) {
    neighborhoodArray = JSON.parse(retrieve);
  }
});

var chart = null;

// chart function
window.onload = function () {
  chart = new CanvasJS.Chart("chartContainer",
  {
    title:{
      text: "Your Neighborhood Match!",
      fontFamily: "Impact",
      fontWeight: "normal"
    },

    legend:{
      verticalAlign: "bottom",
      horizontalAlign: "center"
    },
    data: [
    {
      //startAngle: 45,
     indexLabelFontSize: 20,
     indexLabelFontFamily: "Garamond",
     indexLabelFontColor: "darkgrey",
     indexLabelLineColor: "darkgrey",
     indexLabelPlacement: "outside",
     type: "doughnut",
     showInLegend: true,
     dataPoints: neighborhoodArray

   }
   ]
 });

  chart.render();
}
