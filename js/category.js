console.log('start');
var Category = function(name, photos) { //object constructor for Category, referencing Photos constructor
    this.name = name;
    this.photos = photos;
    this.count = 0;
}

var categoryArray = new Array ();
categoryArray.push(new Category("night", [club, sportsbar, bartender]));
categoryArray.push(new Category("donut", [bluestar, voodoo, oldfashioned, pips]));
categoryArray.push(new Category("coffee", [latte, americano, frapp, tea, iced]));
categoryArray.push(new Category("transportation", [walk, bike, car, trimet]));
categoryArray.push(new Category("housing", [boathouse, home, condo]));
categoryArray.push(new Category("person", [hipster, suit, preppy, nerd]));
categoryArray.push(new Category("sports", [blazer, thorns, timbers, winterhawks, hops]));
categoryArray.push(new Category("active", [wakeboarding, hiking, skiing, snowboarding]));
categoryArray.push(new Category("drink", [craftbeer, pabst, cocktails]));


var categoryIndex = 0; // start categoryIndex at zero
var totalCount = 0;

// Display Image function
function displayImage(category) {
  var imgContainer = document.getElementById('photos');  // get photo ID
  imgContainer.innerHTML = "";  // empty "" so image fills in the same 'photos' div

  category.photos.forEach(function(photo){  // access photo
  //  var div = document.createElement("div"); //creating div tag
    var img = document.createElement("img"); // creating img tag
    img.src = photo.imagepath; // image source equal to photo imagepath

    img.addEventListener("click", function(){  // event listener to add neighborhood vote count when image is clicked
      console.log(photo);
      photo.neighborhoods.forEach(function(neighborhood){  // access neighborhood

        neighborhood.voteCount++;  // add count to neighborhood

        neighborhood.y++;  // add count to neighborhood
        chart.render();
        });

        categoryIndex++;  // increment, to cycle
        localStorage.setItem('results', JSON.stringify(categoryArray));
        localStorage.setItem('neighborhoods', JSON.stringify(neighborhoodArray));
        totalCount++;

        if (totalCount < categoryArray.length ) {
          displayImage(categoryArray[categoryIndex]);  // call displayImage function to load next category
          console.log(totalCount);
          console.log('show result');
        } else {
       // var button = document.getElementById('showResults');
         // button.className = "show";
          var change = document.getElementById('photos');
          change.id = 'endPhotos';

          var button2 = document.getElementById('clearButton');
          button2.className = "show";
          button2.addEventListener('click', function(){
            localStorage.removeItem('results');
            totalCount = 0;
            var changeTwo = document.getElementById('endPhotos');
            changeTwo.id = 'photos';
            categoryIndex = 0;
            displayImage(categoryArray[categoryIndex]);
          });

          var button = document.getElementById('showResults');
            button.className = "show";
            button.addEventListener('click', function(){
             neighborhoodArray.sort(nhCompare);
             window.location.href = neighborhoodArray[0].resultsPage;
           });
        }
    });
    imgContainer.appendChild(img); // adding image content into imgContainer
  })
}

var chart = null;

window.addEventListener("load", function() {
  var retrieve = localStorage.getItem('results');
  if (retrieve != null) {
    categoryArray = JSON.parse(retrieve);
  }
});

var chart = null;

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

displayImage(categoryArray[categoryIndex]);  // call displayImage to set image to index.hmtl

var button = document.getElementById('photos');
