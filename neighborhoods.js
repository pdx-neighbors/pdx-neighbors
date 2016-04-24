
var Neighborhood = function(name) { //object constructor for neighborhoods
    this.name = name;
    this.voteCount = 0;
    this.y = 0;


}

var ne = new Neighborhood("Northeast");
var se = new Neighborhood("Southeast");
var nw = new Neighborhood("Northwest");
var sw = new Neighborhood("Southwest");
var n = new Neighborhood("North");

var neighborhoodArray = new Array ();
neighborhoodArray.push(ne);
neighborhoodArray.push(se);
neighborhoodArray.push(nw);
neighborhoodArray.push(sw);
neighborhoodArray.push(n);
