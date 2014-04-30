		var cloudmade = L.tileLayer('http://maps1.clemetparks.com/tilestache/tilestache.cgi/basemap/{z}/{x}/{y}.jpg', {
			maxZoom: 18,
			minZoom: 10,
			attribution: 'Cleveland Metroparks'
		});

		var map = L.map('map')
				.addLayer(cloudmade);

		var markers = L.markerClusterGroup();

		var geoJsonLayer = L.geoJson(geoJsonData, {
			onEachFeature: function (feature, layer) {
				layer.bindPopup('<div id="popupcontent">' + '<div id="popup-title"><h2 class="popup">' + feature.properties.INVPLANT + '</h2></div>' + '<div id="popuptext">' + '<h4>' + '<span>' + "Common Name: " + '</span>' + feature.properties.COM_NAME + '</h4>' + '<h4>' + '<span>' + "Reservation: " + '</span>' + feature.properties.RES + '</h4>' + '</div>' + '</div>');
			}
		});
		markers.addLayer(geoJsonLayer);

		map.addLayer(markers);
		map.fitBounds(markers.getBounds());



		
		
		
		
		
		// Layers
		
		var base = L.tileLayer('http://maps1.clemetparks.com/tilestache/tilestache.cgi/basemap/{z}/{x}/{y}.jpg', {
			attribution: 'Imagery &copy <a href="http://clevelandmetroparks.com" target="_blank">Cleveland Metroparks</a>'
		}).addTo(map);
		
		var aerial = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.map-7cfqm6fy/{z}/{x}/{y}.jpg', {
			attribution: 'Imagery &copy <a href="http://Mapbox.com" target="_blank">MapBox</a>'
		});
		
		var treat2011 = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.treat2011/{z}/{x}/{y}.jpg');
		
		// Layer Controller

		var baseLayers = {
			"Cleveland Metroparks": base,
			"Aerial Imagery": aerial
		};

		var overlays = {
			"Invasive Plants": markers,
			"Areas Treated 2011": treat2011
		};

		L.control.layers(baseLayers, overlays).addTo(map);