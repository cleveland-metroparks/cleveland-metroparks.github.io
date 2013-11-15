

		// Add custom popup html to each marker
		var markers = map.markerLayer.on('layeradd', function(e) {
			var marker = e.layer;
			var feature = marker.feature; 
			var images = feature.properties.images
			var slideshowContent = '';

			for(var i = 0; i < images.length; i++) {
				var img = images[i];

				slideshowContent += '<div class="image' + (i === 0 ? ' active' : '') + '">' +
									  '<img src="' + img[0] + '" />' + '</div>';
			}
			
			
			
		// Create custom popup content
		// Javascript is writing html in the popup window to populate features dynamically
			var popupContent =  '<div id="' + feature.properties.id + '" class="popup">' +
									'<h2>' + feature.properties.Location + '</h2>' +
									'<div class="slideshow">' +
										slideshowContent +
									'</div>' +
									'<div class="cycle">' +
										'<a href="#" class="prev" onclick="return moveSlide(\'prev\')">&laquo; Previous</a>' +
										'<a href="#" class="next" onclick="return moveSlide(\'next\')">Next &raquo;</a>' +
									'</div>' +
									'<h3>' + "Bank Number" + " " + feature.properties.bank_num + '</h3>' +
									'<table>' + 
										'<tr>' + '<th>' + " " + '</th>' + '<th>' + "Score" + '</th>' + '<th>' + "Value" + '</th>' + '</tr>' +
										'<tr class="odd_tr">' + '<td>' + "Total Score (BEHI)"  + '</td>' + '<td>' + feature.properties.tot_score  + '</td>' + '</tr>' +
										'<tr>' + '<td>' + "Rank"  + '</td>' + '<td>' + feature.properties.rank  + '</td>' + '</tr>' +
										'<tr class="odd_tr">' + '<td>' + "Bank Height (ft)"  + '</td>' + '<td>' + feature.properties.height  + '</td>' + '</tr>' +
										'<tr>' + '<td>' + "Bank Length (ft)"  + '</td>' + '<td>' + feature.properties.length  + '</td>' + '</tr>' +
										'<tr class="odd_tr">' + '<td>' + "Materials Score"  + '</td>' + '<td>' + feature.properties.mat_score  + '</td>' + '</tr>' +
										'<tr>' + '<td>' + "Stratification Score"  + '</td>' + '<td>' + feature.properties.strat_scor  + '</td>' + '</tr>' +
										'<tr class="odd_tr">' + '<td>' + "Root Score"  + '</td>' + '<td>' + feature.properties.root_score  + '</td>' + '<td>' + feature.properties.root_val  + '</td>' + '</tr>' +
										'<tr>' + '<td>' + "Density Score"  + '</td>' + '<td>' + feature.properties.dens_score  + '</td>' + '<td>' + feature.properties.dens_val  + '</td>' + '</tr>' +
										'<tr class="odd_tr">' + '<td>' + "Angle Score"  + '</td>' + '<td>' + feature.properties.angle_scor  + '</td>' + '<td>' + feature.properties.angle_val + '</td>' + '</tr>' +
										'<tr>' + '<td>' + "Surface Score"  + '</td>' + '<td>' + feature.properties.surf_score  + '</td>' + '<td>' + feature.properties.surf_val  + '</td>' + '</tr>' +
									'</table>' +
								'</div>';

		// http://leafletjs.com/reference.html#popup
		// Bind the popups to their corresponding data point
			marker.bindPopup(popupContent,{
				closeButton: false,
				minWidth: 320
			});
		});

		map.markerLayer.setGeoJSON(geoJson);


		// This example uses jQuery to make selecting items in the slideshow easier
		// Creates the functionality for the next/prev buttons for the image slideshow
		function moveSlide(direction) {
			var $slideshow = $('.slideshow'),
				totalSlides = $slideshow.children().length;

			if (direction === 'prev') {
				var $newSlide = $slideshow.find('.active').prev();
				if ($newSlide.index() < 0) {
					$newSlide = $('.image').last();
				}
			} else {
				var $newSlide = $slideshow.find('.active').next();
				if ($newSlide.index() < 0) {
					$newSlide = $('.image').first();
				}
			}

			$slideshow.find('.active').removeClass('active').hide();
			$newSlide.addClass('active').show();
			return false;
		}




// Add layers to turn on/off
// Cleveland Metroparks trails app base layer
var parks = L.tileLayer('http://maps1.clemetparks.com/tilestache/tilestache.cgi/basemap/{z}/{x}/{y}.jpg', {
    attribution: 'Map data <a href="http://clevelandmetroparks.com" target="_blank">Cleveland Metroparks</a>, Imagery <a href="http://maps.clevelandmetroparks.com" target="_blank">Cleveland Metroparks</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	minZoom: 10,
    maxZoom: 18
}).addTo(map);


// Mapbox satellite base layer
var imagery = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.map-7cfqm6fy/{z}/{x}/{y}.jpg', {
    attribution: 'Map data <a href="http://clevelandmetroparks.com" target="_blank">Cleveland Metroparks</a>, Imagery &copy <a href="http://mapbox.com" target="_blank">MapBox</a>',
	minZoom: 10,	
    maxZoom: 18
});

// BEHI line data hosted as a mapbox layer created in TileMill
var behi = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.41zcl3di/{z}/{x}/{y}.jpg', {
	minZoom: 10,	
    maxZoom: 18
}).addTo(map);


// Adds the base layers to the layer controller
// format=     "Layer label in the controller" : variable name given above,
var baseMaps = {
	"Cleveland Metroparks":parks,
	"Satellite":imagery
};

// Add the overlay layers to the layer controller
// format=     "Layer label in the controller" : variable name given above,
var overlayMaps = {
	"BEHI Ranks":behi,
	"BEHI Data Points":markers
};

// Adds layer controller
L.control.layers(baseMaps, overlayMaps).addTo(map);

// Zoom to lat/long on link click
document.getElementById('navigation').onclick = function(e) {
    var pos = e.target.getAttribute('data-position');
    if (pos) {
        var loc = pos.split(',');
        map.setView(loc, 16);
    }
}


// Sets the starting lat/long and zoom of the map on first page load
map.setView([41.3902, -81.6682], 11);


// makes the stream info boxes appear/hide
function tabSwitch_2(active, number, tab_prefix, content_prefix) {  
      
    for (var i=1; i < number+1; i++) {  
      document.getElementById(content_prefix+i).style.display = 'none';  
      document.getElementById(tab_prefix+i).className = '';  
    }  
    document.getElementById(content_prefix+active).style.display = 'block';  
    document.getElementById(tab_prefix+active).className = 'active';      
      
}