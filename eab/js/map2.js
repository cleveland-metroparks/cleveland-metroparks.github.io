// Create map
	var map = L.map('map2', {
		center: [38.1346, -95.2734],
		zoom: 4,
		minZoom: 4,
		maxZoom: 5
	});
		
	 
	 
	 
	// Base Data
	var base = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.map-6v2dod1b/{z}/{x}/{y}.jpg', {
		attribution: 'Imagery &copy <a href="mapbox.com" target="_blank">MapBox</a>'
	}).addTo(map);
	
	var extent = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.EAB_range/{z}/{x}/{y}.png', {
		attribution: 'Map data <a href="http://www.aphis.usda.gov/plant_health/plant_pest_info/emerald_ash_b/index.shtml" target="_blank">USDA - APHIS</a>',
		zIndex:9999
	});
	
	var quar = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.EAB_quarantine/{z}/{x}/{y}.png', {
		attribution: 'Map data <a href="http://www.aphis.usda.gov/plant_health/plant_pest_info/emerald_ash_b/index.shtml" target="_blank">USDA - APHIS</a>',
		zIndex:6000
	});
	
		
	//Ash tree extents
	var trees = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.trees/{z}/{x}/{y}.png', {
		attribution: 'Map data <a href="http://esp.cr.usgs.gov/data/little/" target="_blank">Geosciences and Envrironmental Change Science Center</a>',
		zIndex:0,
		wax: 'http://tiles.mapbox.com/cminvasiveplants/map/trees.tilejson'
	});
	
	var fraxamer = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.fraxamer/{z}/{x}/{y}.png', {
		attribution: 'Map data <a href="http://esp.cr.usgs.gov/data/little/" target="_blank">Geosciences and Envrironmental Change Science Center</a>',
		zIndex:0
	});
	
	var fraxanom = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.Amer_ash/{z}/{x}/{y}.png', {
		attribution: 'Map data <a href="http://esp.cr.usgs.gov/data/little/" target="_blank">Geosciences and Envrironmental Change Science Center</a>',
		zIndex:0
	});
	
	var fraxberl = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.fraxberl/{z}/{x}/{y}.png', {
		attribution: 'Map data <a href="http://esp.cr.usgs.gov/data/little/" target="_blank">Geosciences and Envrironmental Change Science Center</a>',
		zIndex:0
	});
	
	var fraxcaro = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.fraxcaro/{z}/{x}/{y}.png', {
		attribution: 'Map data <a href="http://esp.cr.usgs.gov/data/little/" target="_blank">Geosciences and Envrironmental Change Science Center</a>',
		zIndex:0
	});
	
	var fraxcusp = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.fraxcusp/{z}/{x}/{y}.png', {
		attribution: 'Map data <a href="http://esp.cr.usgs.gov/data/little/" target="_blank">Geosciences and Envrironmental Change Science Center</a>',
		zIndex:0
	});
	
	var fraxdipe = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.fraxdipe/{z}/{x}/{y}.png', {
		attribution: 'Map data <a href="http://esp.cr.usgs.gov/data/little/" target="_blank">Geosciences and Envrironmental Change Science Center</a>',
		zIndex:0
	});
	
	var fraxgood = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.fraxgood/{z}/{x}/{y}.png', {
		attribution: 'Map data <a href="http://esp.cr.usgs.gov/data/little/" target="_blank">Geosciences and Envrironmental Change Science Center</a>',
		zIndex:0
	});
	
	var fraxgreg = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.fraxgreg/{z}/{x}/{y}.png', {
		attribution: 'Map data <a href="http://esp.cr.usgs.gov/data/little/" target="_blank">Geosciences and Envrironmental Change Science Center</a>',
		zIndex:0
	});
	
	var fraxlati = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.fraxlati/{z}/{x}/{y}.png', {
		attribution: 'Map data <a href="http://esp.cr.usgs.gov/data/little/" target="_blank">Geosciences and Envrironmental Change Science Center</a>',
		zIndex:0
	});
	
	var fraxnigr = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.fraxnigr/{z}/{x}/{y}.png', {
		attribution: 'Map data <a href="http://esp.cr.usgs.gov/data/little/" target="_blank">Geosciences and Envrironmental Change Science Center</a>',
		zIndex:0
	});
	
	var fraxpapi = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.fraxpapi/{z}/{x}/{y}.png', {
		attribution: 'Map data <a href="http://esp.cr.usgs.gov/data/little/" target="_blank">Geosciences and Envrironmental Change Science Center</a>',
		zIndex:0
	});
	
	var fraxpenn = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.fraxpenn/{z}/{x}/{y}.png', {
		attribution: 'Map data <a href="http://esp.cr.usgs.gov/data/little/" target="_blank">Geosciences and Envrironmental Change Science Center</a>',
		zIndex:0
	});
	
	var fraxprof = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.fraxprof/{z}/{x}/{y}.png', {
		attribution: 'Map data <a href="http://esp.cr.usgs.gov/data/little/" target="_blank">Geosciences and Envrironmental Change Science Center</a>',
		zIndex:0
	});
	
	var fraxquad = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.fraxquad/{z}/{x}/{y}.png', {
		attribution: 'Map data <a href="http://esp.cr.usgs.gov/data/little/" target="_blank">Geosciences and Envrironmental Change Science Center</a>',
		zIndex:0
	});
	
	var fraxtexe = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.fraxtexe/{z}/{x}/{y}.png', {
		attribution: 'Map data <a href="http://esp.cr.usgs.gov/data/little/" target="_blank">Geosciences and Envrironmental Change Science Center</a>',
		zIndex:0
	});
	
	var fraxvelu = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.fraxvelu/{z}/{x}/{y}.png', {
		attribution: 'Map data <a href="http://esp.cr.usgs.gov/data/little/" target="_blank">Geosciences and Envrironmental Change Science Center</a>',
		zIndex:0
	});
	
	

	// Layer switcher controls
	var baseMaps = null;

	var overlayMaps = {
	"Federal Quarantine Zone":quar,
	"Known EAB Extent":extent,
	"Ash Tree Range":trees,
	"White Ash (<i>Fraxinus americana</i>)":fraxamer,
	"Single-Leaf Ash (<i>Fraxinus anomala</i>)":fraxanom,
	"Berlandier Ash (<i>Fraxinus berlandieriana</i>)":fraxberl,
	"Carolina Ash (<i>Fraxinus caroliniana</i>)":fraxcaro,
	"Fragrant Ash (<i>Fraxinus cuspidata</i>)":fraxcusp,
	"Two-Petal Ash (<i>Fraxinus dipetala</i>)":fraxdipe,
	"Goodding Ash (<i>Fraxinus gooddingii</i>)":fraxgood,
	"Gregg Ash (<i>Fraxinus greggii</i>)":fraxgreg,
	"Oregon Ash (<i>Fraxinus latifolia</i>)":fraxlati,
	"Black Ash (<i>Fraxinus nigra</i>)":fraxnigr,
	"Chihuahua Ash (<i>Fraxinus papillosa</i>)":fraxpapi,
	"Green Ash (<i>Fraxinus pennsylvanica</i>)":fraxpenn,
	"Pumpkin Ash (<i>Fraxinus profunda</i>)":fraxprof,
	"Blue Ash (<i>Fraxinus quadrangulata</i>)":fraxquad,
	"Texas Ash (<i>Fraxinus texensis</i>)":fraxtexe,
	"Velvet Ash (<i>Fraxinus velutina</i>)":fraxvelu
	};
	
	
	// Add layer switcher controls to map
	L.control.layers(baseMaps, overlayMaps, {
		autoZIndex:true
	}).addTo(map);