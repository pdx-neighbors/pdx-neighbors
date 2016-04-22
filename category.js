var Category = function(name, photos) { //object constructor for Category, referencing Photos constructor
    this.name = name;
    this.photos = photos;
    this.count = 0;
}

var categoryArray = new Array ();
var night = new Category("night", [club, sportsbar, bartender]);
var donut = new Category("donut", [bluestar, voodoo, oldfashioned, pips]);
var coffee = new Category("coffee", [latte, americano, frapp, tea, iced]);
var transportation = new Category("transportation", [walk, bike, car, trimet]);
var housing = new Category("housing", [boathouse, home, condo]);
var person = new Category("person", [hipster, suit, preppy, nerd]);
var sports = new Category("sports", [blazer, thorns, timbers, winterhawks, hops]);
var active = new Category("active", [wakeboarding, hiking, skiing, snowboarding]);
var drink = new Category("drink", [craftbeer, pabst, cocktails]);



function displayImage(category) {
  var imgContainer = document.getElementById('photos');  // get photo ID
  imgContainer.innerHTML = "";
  category.photos.forEach(function(photo){  // access photo

    var img = document.createElement("img"); // creating img tag
    img.src = photo.imagepath;
    img.addEventListener("click", function(){
      photo.neighborhoods.forEach(function(neighborhood){  // access neighborhood
        neighborhood.voteCount++;  // add count to neighborhood
      });
    });
    imgContainer.appendChild(img); // adding image content into imgContainer
  })

}
displayImage(night);
