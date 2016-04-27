
var Neighborhood = function(name, resultsPage) { //object constructor for neighborhoods
    this.name = name;
    this.voteCount = 0;
    this.y = 0;
    this.resultsPage = resultsPage;

}

var ne = new Neighborhood("Northeast", "resultsNE.html");
var se = new Neighborhood("Southeast", "resultsSE.html");
var nw = new Neighborhood("Northwest", "resultsNW.html");
var sw = new Neighborhood("Southwest", "resultsSW.html");
var n = new Neighborhood("North", "resultsN.html");

var neighborhoodArray = new Array ();
neighborhoodArray.push(ne);
neighborhoodArray.push(se);
neighborhoodArray.push(nw);
neighborhoodArray.push(sw);
neighborhoodArray.push(n);

function nhCompare(a,b) {
    if (a.voteCount < b.voteCount)
      return 1;
    else if (a.voteCount > b.voteCount)
      return -1;
    else
    return 0;
  }
