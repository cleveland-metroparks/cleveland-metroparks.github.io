var map = L.map('map').setView([41.40, -81.708], 10);


// Base layers

var cmparks = L.tileLayer('http://maps1.clemetparks.com/tilestache/tilestache.cgi/basemap/{z}/{x}/{y}.jpg', {
    attribution: 'Map data &copy; <a href="http://clevelandmetroparks.com" target="_blank">Cleveland Metroparks</a>, Imagery &copy <a href="http://maps.clevelandmetroparks.com" target="_blank">Cleveland Metroparks</a>',
	minZoom: 10,
    maxZoom: 14
}).addTo(map);

var dark = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.map-w9lmul4d/{z}/{x}/{y}.jpg', {
	attribution: 'Map data &copy; <a href="http://clevelandmetroparks.com" target="_blank">Cleveland Metroparks</a>, Imagery &copy <a href="http://mapbox.com" target="_blank">MapBox</a>',
	minZoom: 10,	
    maxZoom: 14
});

// EAB Data

var rulers1 = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.rulers1/{z}/{x}/{y}.png', {
	minZoom: 10,
    maxZoom: 14
});

var rulers2 = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.rulers2/{z}/{x}/{y}.png', {
	minZoom: 10,
    maxZoom: 14
});

var rulers3 = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.rulers3/{z}/{x}/{y}.png', {
	minZoom: 10,
    maxZoom: 14
});

var huggers1 = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.huggers1/{z}/{x}/{y}.png', {
	minZoom: 10,
    maxZoom: 14
});

var huggers2 = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.huggers2/{z}/{x}/{y}.png', {
	minZoom: 10,
    maxZoom: 14
});

var huggers3 = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.huggers3/{z}/{x}/{y}.png', {
	minZoom: 10,
    maxZoom: 14
});

var towers1 = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.towers1/{z}/{x}/{y}.png', {
	minZoom: 10,
    maxZoom: 14
});

var towers2 = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.towers2/{z}/{x}/{y}.png', {
	minZoom: 10,
    maxZoom: 14
});

var towers3 = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.towers3/{z}/{x}/{y}.png', {
	minZoom: 10,
    maxZoom: 14
});

var traps = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.eab_traps/{z}/{x}/{y}.png', {
	minZoom: 10,
    maxZoom: 14
});

var baseMaps = {
	"CM Parks": cmparks,
	"Dark": dark
};

var overlayMaps = {
	"EAB Traps Locations 2011":traps,
    "<img src='img/ruler1.png'>  4-12&quot; - <50%</span>": rulers1,
    "<img src='img/ruler2.png'>  4-12&quot; - 50%</span>": rulers2,
    "<img src='img/ruler3.png'>  4-12&quot; - >50%</span>": rulers3,

    "<img src='img/hugger1.png'>  13-20&quot; - <50%</span>": huggers1,
    "<img src='img/hugger2.png'>  13-20&quot; - 50%</span>": huggers2,
    "<img src='img/hugger3.png'>  13-20&quot; - >50%</span>": huggers3,

    "<img src='img/tower1.png'>  >20&quot; - <50%</span>": towers1,
    "<img src='img/tower2.png'>  >20&quot; - 50%</span>": towers2,
    "<img src='img/tower3.png'>  >20&quot; - >50%</span>": towers3
};

L.control.layers(baseMaps, overlayMaps).addTo(map);