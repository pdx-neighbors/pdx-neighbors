var Photo = function(imagepath, name, neighborhoods) { //object constructor for Photos, referencing neighborhoods constructor
    this.imagepath = imagepath;
    this.name = name;
    this.neighborhoods = neighborhoods;
}


var wakeboarding = new Photo("wakeboarding.jpg", "wakeboarding", [n, ne]);
var snowboarding = new Photo("snowboarding.jpg", "snowboarding", [ne, se]); // consider replacing with horse shoeing
var skiing = new Photo("skiing.jpg", "skiing", [nw, sw]);
var hiking = new Photo("hiking.jpg", "hiking" [n, se, ne]);

var voodoo = new Photo("voodoo.jpg", "voodoo", [sw, ne]);
var bluestar = new Photo("bluestar.jpg", "bluestar", [nw, se]);
var oldfashioned = new Photo("oldfashioned.jpg", "oldfashioned", [n, ne]);
var pips = new Photo("pips.jpg", "pips", [ne]);

var latte = new Photo("latte.jpg", "latte", [nw, sw]);
var iced = new Photo("iced.jpg", "iced", [sw]);
var tea = new Photo("tea.jpg", "tea", [ne, se]);
var americano = new Photo("americano.jpg", "americano", [nw, n]);
var frapp = new Photo("frapp.jpg", "frapp", [sw]);

var sportsbar = new Photo("images/sportsbar.jpg", "sportsbar", [ne, n]);
var club = new Photo("images/club.jpg", "club", [nw, sw]);
var bartender = new Photo("images/bartender.jpg", "bartender", [se, ne]);

var pabst = new Photo("pabst.jpg", "pabst", [n]);
var cocktails = new Photo("images/cocktails.jpg", "cocktails", [nw, sw]);
var craftbeer = new Photo("craftbeer.jpg", "craftbeer", [ne, se]);

var home = new Photo("home.jpg", "home", [ne, se, sw]);
var condo = new Photo("condo.jpg", "condo" [nw, sw]);
var boathouse = new Photo("boathouse.jpg", "boathouse", [n, nw]);

var blazer = new Photo("blazer.gif", "blazer", [ne, se]);
var hops = new Photo("hops.jpg", "hops", [sw]);
var thorns = new Photo("thorns.png", "thorns", [se, nw]);
var timbers = new Photo("timbers.png", "timbers", [nw, sw]);
var winterhawks = new Photo("winterhawks.png", "winterhawks", [ne, n]);

var walk = new Photo("walking.jpg", "walk", [nw, sw]);
var car = new Photo("car.jpg", "car", [n, ne, se, sw]);
var trimet = new Photo("trimet.jpg", "trimet", [n, ne, nw, sw, se]);
var bike = new Photo("bike.jpg", "bike", [se, ne, nw]);

var suit = new Photo("suit.jpeg", "suit", [sw, nw]);
var preppy = new Photo("preppy.png", "preppy", [sw]);
var nerd = new Photo("nerd.png", "nerd", [ne, se, nw]);
var hipster = new Photo("hipster.jpg", "hipster", [n, ne]);
