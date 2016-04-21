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

//TODO: make array that calls category

function displayImage(category) {
  document.getElementById('photos').innerHTML = "";
  for (photo of category.photos){
      document.getElementById('photos').innerHTML += "<img src="+photo.imagepath+">";

      category.addEventListener("click", clickCounter);
      displayImage(night);
  }

}
displayImage(night);
//
// function clickCounter() {
//   category.count++;
// }
// clickCounter();
