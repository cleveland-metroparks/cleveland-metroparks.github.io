var map = L.map('map')
	.setView([41.385, -81.708], 10);


	
var myLayer = L.mapbox.featureLayer().addTo(map);

var geoJson = [{
"features": [
    {
      "type": "Feature",
      "properties": {
        "trap": "EABEC01",
        "res": "EUCLID CREEK",
        "latitude": 41.56169,
        "longitude": -81.53278,
        "eab": "no",
        "count": 0,
        "marker-color": "#45B528",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.53278,
          41.56169
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABNC06",
        "res": "NORTH CHAGRIN",
        "latitude": 41.55104,
        "longitude": -81.41853,
        "eab": "no",
        "count": 0,
        "marker-color": "#45B528",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.41853,
          41.55104
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABNC05",
        "res": "NORTH CHAGRIN",
        "latitude": 41.58525,
        "longitude": -81.43,
        "eab": "no",
        "count": 0,
        "marker-color": "#45B528",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43,
          41.58525
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABNC02",
        "res": "NORTH CHAGRIN",
        "latitude": 41.58244,
        "longitude": -81.42893,
        "eab": "no",
        "count": 0,
        "marker-color": "#45B528",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42893,
          41.58244
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABNC07",
        "res": "NORTH CHAGRIN",
        "latitude": 41.56971,
        "longitude": 81.43787,
        "eab": "no",
        "count": 0,
        "marker-color": "#45B528",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.43787,
          41.56971
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABSC01",
        "res": "SOUTH CHAGRIN",
        "latitude": 41.41381,
        "longitude": -81.42323,
        "eab": "no",
        "count": 0,
        "marker-color": "#45B528",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42323,
          41.41381
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABSC02",
        "res": "SOUTH CHAGRIN",
        "latitude": 41.42426,
        "longitude": -81.42265,
        "eab": "no",
        "count": 0,
        "marker-color": "#45B528",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42265,
          41.42426
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABBR03",
        "res": "BRECKSVILLE",
        "latitude": 41.3194,
        "longitude": -81.62207,
        "eab": "yes",
        "count": 1,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.62207,
          41.3194
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABBR04",
        "res": "BRECKSVILLE",
        "latitude": 41.3199,
        "longitude": -81.59537,
        "eab": "yes",
        "count": 1,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.59537,
          41.3199
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABBE01",
        "res": "BEDFORD",
        "latitude": 41.35852,
        "longitude": -81.56316,
        "eab": "yes",
        "count": 2,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56316,
          41.35852
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABBE02",
        "res": "BEDFORD",
        "latitude": 41.37521,
        "longitude": -81.5733,
        "eab": "yes",
        "count": 6,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.5733,
          41.37521
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABBE03",
        "res": "BEDFORD",
        "latitude": 41.38644,
        "longitude": -81.53572,
        "eab": "yes",
        "count": 7,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.53572,
          41.38644
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABBE04",
        "res": "BEDFORD",
        "latitude": 41.37613,
        "longitude": -81.49068,
        "eab": "yes",
        "count": 2,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.49068,
          41.37613
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABOE01",
        "res": "OHIO EC",
        "latitude": 41.41748,
        "longitude": -81.63954,
        "eab": "yes",
        "count": 1,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.63954,
          41.41748
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABGP01",
        "res": "GARFIELD PARK",
        "latitude": 41.4329,
        "longitude": -81.60646,
        "eab": "no",
        "count": 0,
        "marker-color": "#45B528",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60646,
          41.4329
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABGP02",
        "res": "GARFIELD PARK",
        "latitude": 41.42423,
        "longitude": -81.60625,
        "eab": "yes",
        "count": 1,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60625,
          41.42423
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABBW05",
        "res": "BRADLEY WOODS",
        "latitude": 41.42167,
        "longitude": -81.94383,
        "eab": "yes",
        "count": 3,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94383,
          41.42167
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABBW06",
        "res": "BRADLEY WOODS",
        "latitude": 41.41314,
        "longitude": -81.96307,
        "eab": "yes",
        "count": 4,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.96307,
          41.41314
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABMS01",
        "res": "MILLSTREAM RUN",
        "latitude": 41.35597,
        "longitude": -81.85635,
        "eab": "no",
        "count": 0,
        "marker-color": "#45B528",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85635,
          41.35597
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABMS02",
        "res": "MILLSTREAM RUN",
        "latitude": 41.32392,
        "longitude": -81.81728,
        "eab": "yes",
        "count": 1,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81728,
          41.32392
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABMS03",
        "res": "MILLSTREAM RUN",
        "latitude": 41.31106,
        "longitude": -81.78616,
        "eab": "yes",
        "count": 27,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78616,
          41.31106
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABRR01",
        "res": "ROCKY RIVER",
        "latitude": 41.39156,
        "longitude": -81.8694,
        "eab": "yes",
        "count": 7,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8694,
          41.39156
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABRR02",
        "res": "ROCKY RIVER",
        "latitude": 41.39222,
        "longitude": -81.87091,
        "eab": "yes",
        "count": 14,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87091,
          41.39222
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABHI07",
        "res": "HINCKLEY",
        "latitude": 41.22695,
        "longitude": -81.71771,
        "eab": "no",
        "count": 0,
        "marker-color": "#45B528",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.71771,
          41.22695
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "EABHI08",
        "res": "HINCKLEY",
        "latitude": 41.20226,
        "longitude": -81.71754,
        "eab": "no",
        "count": 0,
        "marker-color": "#45B528",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.71754,
          41.20226
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "HIBW01",
        "res": "HINCKLEY",
        "latitude": 41.21545,
        "longitude": -81.70573,
        "eab": "no",
        "count": 0,
        "marker-color": "#45B528",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.70573,
          41.21545
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "HIBW02",
        "res": "HINCKLEY",
        "latitude": 41.21467,
        "longitude": -81.70877,
        "eab": "yes",
        "count": 1,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.70877,
          41.21467
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "HIBW03",
        "res": "HINCKLEY",
        "latitude": 41.21768,
        "longitude": -81.71117,
        "eab": "yes",
        "count": 1,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.71117,
          41.21768
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "HIBW04",
        "res": "HINCKLEY",
        "latitude": 41.21703,
        "longitude": -81.71313,
        "eab": "no",
        "count": 0,
        "marker-color": "#45B528",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.71313,
          41.21703
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "HIBW05",
        "res": "HINCKLEY",
        "latitude": 41.21576,
        "longitude": -81.71412,
        "eab": "no",
        "count": 0,
        "marker-color": "#45B528",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.71412,
          41.21576
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "HIBW06",
        "res": "HINCKLEY",
        "latitude": 41.21428,
        "longitude": -81.71116,
        "eab": "yes",
        "count": 1,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.71116,
          41.21428
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "HIBW07",
        "res": "HINCKLEY",
        "latitude": 41.21575,
        "longitude": -81.71108,
        "eab": "yes",
        "count": 2,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.71108,
          41.21575
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "RRBW01",
        "res": "ROCKY RIVER",
        "latitude": 41.39157,
        "longitude": -81.87162,
        "eab": "no",
        "count": 0,
        "marker-color": "#45B528",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87162,
          41.39157
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "RRBW02",
        "res": "ROCKY RIVER",
        "latitude": 41.39065,
        "longitude": -81.86958,
        "eab": "yes",
        "count": 11,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86958,
          41.39065
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "RRBW03",
        "res": "ROCKY RIVER",
        "latitude": 41.38952,
        "longitude": -81.86946,
        "eab": "yes",
        "count": 10,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86946,
          41.38952
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "RRBW04",
        "res": "ROCKY RIVER",
        "latitude": 41.38721,
        "longitude": -81.86955,
        "eab": "yes",
        "count": 17,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86955,
          41.38721
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "RRBW05",
        "res": "ROCKY RIVER",
        "latitude": 41.38957,
        "longitude": -81.87527,
        "eab": "yes",
        "count": 6,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87527,
          41.38957
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "RRBW06",
        "res": "ROCKY RIVER",
        "latitude": 41.39067,
        "longitude": -81.87336,
        "eab": "yes",
        "count": 28,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87336,
          41.39067
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "BCBW01",
        "res": "BIG CREEK",
        "latitude": 41.37058,
        "longitude": -81.83062,
        "eab": "yes",
        "count": 3,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83062,
          41.37058
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "BCBW02",
        "res": "BIG CREEK",
        "latitude": 41.36902,
        "longitude": -81.83053,
        "eab": "yes",
        "count": 25,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83053,
          41.36902
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "BCBW03",
        "res": "BIG CREEK",
        "latitude": 41.3678,
        "longitude": -81.83064,
        "eab": "yes",
        "count": 168,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83064,
          41.3678
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "BCBW04",
        "res": "BIG CREEK",
        "latitude": 41.36604,
        "longitude": -81.83139,
        "eab": "yes",
        "count": 18,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83139,
          41.36604
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "BCBW06",
        "res": "BIG CREEK",
        "latitude": 41.36221,
        "longitude": -81.82961,
        "eab": "yes",
        "count": 35,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82961,
          41.36221
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "trap": "BCBW07",
        "res": "BIG CREEK",
        "latitude": 41.36129,
        "longitude": -81.82732,
        "eab": "yes",
        "count": 17,
        "marker-color": "#B11F06",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82732,
          41.36129
        ]
      }
    }
  ]
}];

// Add custom popup html to each marker
myLayer.on('layeradd', function(e) {
    var marker = e.layer;
    var feature = marker.feature;


    // Create custom popup content
    var popupContent =  '<div class="popup_container">' + '<table>' + '<tr>' + '<td>' + '<p>' + "Trap" + '</p>' + '</td>' + '<td>' + feature.properties.trap + '</td>' + '</tr>' + 
																	  '<tr>' + '<td>' + '<p>' + "Reservation" + '</p>' + '</td>' + '<td>' + feature.properties.res + '</td>' + '</tr>' +
																	  '<tr>' + '<td>' + '<p>' + "Num EAB Trapped" + '</p>' + '</td>' + '<td>' + feature.properties.count + '</td>' + '</tr>' + 
														  '</table>' + '</div>'


    // http://leafletjs.com/reference.html#popup
    marker.bindPopup(popupContent,{
        closeButton: false,
        minWidth: 320
    });
});

// Add features to the map
myLayer.setGeoJSON(geoJson);
	
	
	
	
	






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

var baseMaps = {
	"CM Parks": cmparks,
	"Dark": dark
};

var overlayMaps = {
	"EAB Traps Locations 2011":myLayer,
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