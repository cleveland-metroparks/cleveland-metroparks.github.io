// Create map
	var map = L.map('map2', {
		center: [41.385, -81.708],
		zoom: 10,
		minZoom: 10
	});
		
	 
	 
	 
	// Base Data
var cmparks = L.tileLayer('http://maps1.clemetparks.com/tilestache/tilestache.cgi/basemap/{z}/{x}/{y}.jpg', {
    attribution: 'Map data &copy; <a href="http://clevelandmetroparks.com" target="_blank">Cleveland Metroparks</a>, Imagery &copy <a href="http://maps.clevelandmetroparks.com" target="_blank">Cleveland Metroparks</a>',
	minZoom: 10,
    maxZoom: 14
}).addTo(map);
	
	
		
	//Ash tree extents
	var trees = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.trees/{z}/{x}/{y}.png', {
		attribution: 'Map data <a href="http://esp.cr.usgs.gov/data/little/" target="_blank">Geosciences and Envrironmental Change Science Center</a>',
		zIndex:0,
		wax: 'http://tiles.mapbox.com/cminvasiveplants/map/trees.tilejson'
	});
	
	
	

	// Layer switcher controls
	var baseMaps = null;

	var overlayMaps = {
	"Ash Tree Range":trees
	};
	
	
	// Add layer switcher controls to map
	L.control.layers(baseMaps, overlayMaps, {
		autoZIndex:true
	}).addTo(map);