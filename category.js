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

var categoryIndex = 0;

function displayImage(category) {
  var imgContainer = document.getElementById('photos');  // get photo ID
  imgContainer.innerHTML = "";
  category.photos.forEach(function(photo){  // access photo

    var img = document.createElement("img"); // creating img tag
    img.src = photo.imagepath;
    img.addEventListener("click", function(){
      console.log(photo);
      photo.neighborhoods.forEach(function(neighborhood){  // access neighborhood
        neighborhood.voteCount++;  // add count to neighborhood

        categoryIndex++;
        displayImage(categoryArray[categoryIndex]);

      });
    });
    imgContainer.appendChild(img); // adding image content into imgContainer
  })

}
displayImage(categoryArray[categoryIndex]);
