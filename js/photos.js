var Photo = function(imagepath, name, neighborhoods) { //object constructor for Photos, referencing neighborhoods constructor
    this.imagepath = imagepath;
    this.name = name;
    this.neighborhoods = neighborhoods;
}


var wakeboarding = new Photo("images/Activity/wakeboarding.jpg", "wakeboarding", [n, ne]);
var snowboarding = new Photo("images/Activity/snowboarding.jpg", "snowboarding", [ne, se]); // consider replacing with horse shoeing
var skiing = new Photo("images/Activity/skiing.jpg", "skiing", [nw, sw]);
var hiking = new Photo("images/Activity/hiking.jpg", "hiking",   [n, se, ne]);

var voodoo = new Photo("images/Donuts/voodoo.jpg", "voodoo", [sw, ne]);
var bluestar = new Photo("images/Donuts/bluestar.jpg", "bluestar", [nw, se]);
var oldfashioned = new Photo("images/Donuts/oldfashioned.jpg", "oldfashioned", [n, ne]);
var pips = new Photo("images/Donuts/pips.jpg", "pips", [ne]);

var latte = new Photo("images/Coffee/latte.jpg", "latte", [nw, sw]);
var iced = new Photo("images/Coffee/iced.jpg", "iced", [sw]);
var tea = new Photo("images/Coffee/tea.jpg", "tea", [ne, se]);
var americano = new Photo("images/Coffee/americano.jpg", "americano", [nw, n]);
var frapp = new Photo("images/Coffee/frapp.jpg", "frapp", [sw]);

var sportsbar = new Photo("images/Night/sportsbar.jpg", "sportsbar", [ne, n]);
var club = new Photo("images/Night/club.jpg", "club", [nw, sw]);
var bartender = new Photo("images/Night/bartender.jpg", "bartender", [se, ne]);

var pabst = new Photo("images/Drink/pabst.jpg", "pabst", [n]);
var cocktails = new Photo("images/Drink/cocktails.jpg", "cocktails", [nw, sw]);
var craftbeer = new Photo("images/Drink/craftbeer.jpg", "craftbeer", [ne, se]);

var home = new Photo("images/Housing/home.jpg", "home", [ne, se, sw]);
var condo = new Photo("images/Housing/condo.jpg", "condo", [nw, sw]);
var boathouse = new Photo("images/Housing/boathouse.jpg", "boathouse", [n, nw]);

var blazer = new Photo("images/Sports/blazer.gif", "blazer", [ne, se]);
var hops = new Photo("images/Sports/hops.jpg", "hops", [sw]);
var thorns = new Photo("images/Sports/thorns.png", "thorns", [se, nw]);
var timbers = new Photo("images/Sports/timbers.png", "timbers", [nw, sw]);
var winterhawks = new Photo("images/Sports/winterhawks.png", "winterhawks", [ne, n]);

var walk = new Photo("images/Transportation/walking.jpg", "walk", [nw, sw]);
var car = new Photo("images/Transportation/car.jpg", "car", [n, ne, se, sw]);
var trimet = new Photo("images/Transportation/trimet.jpg", "trimet", [n, ne, nw, sw, se]);
var bike = new Photo("images/Transportation/bike.jpg", "bike", [se, ne, nw]);

var suit = new Photo("images/Person/suit.jpeg", "suit", [sw, nw]);
var preppy = new Photo("images/Person/Preppy.png", "preppy", [sw]);
var nerd = new Photo("images/Person/nerd.png", "nerd", [ne, se, nw]);
var hipster = new Photo("images/Person/hip.jpg", "hipster", [n, ne]);
