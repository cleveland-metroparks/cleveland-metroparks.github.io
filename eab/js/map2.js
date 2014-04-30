	var map = L.map('map2', {
		center: [41.385, -81.708],
		zoom: 10,
		minZoom: 10
	});

var geoJsonData = {
  "type": "FeatureCollection",
  "crs": {
    "type": "name",
    "properties": {
      "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
    }
  },
  "features": [
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Forbes Woods",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Bedford",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.373677,
        "longitude": -81.505376,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.505376,
          41.373677
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Pawpaw Picnic Area",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.311245,
        "longitude": -81.784567,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.784567,
          41.311245
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Eastland Road near Railroad Bridge",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.348788,
        "longitude": -81.842918,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.842918,
          41.348788
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Bonnie Park",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.332789,
        "longitude": -81.833678,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.833678,
          41.332789
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "North of the Chalet",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.325138,
        "longitude": -81.817353,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.817353,
          41.325138
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "York Rd Picnic Area",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.304512,
        "longitude": -81.75716,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.75716,
          41.304512
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Strawberry Picnic Area",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "North Chagrin",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.579689,
        "longitude": -81.429153,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.429153,
          41.579689
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Ox Ln and Oxbow Ln",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "North Chagrin",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.566287,
        "longitude": -81.420813,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.420813,
          41.566287
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Judge's Lake",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Hinckley",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.20324,
        "longitude": -81.700665,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.700665,
          41.20324
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Johnson's Picnic Area",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Hinckley",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.217151,
        "longitude": -81.714638,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.714638,
          41.217151
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Kiawanis Picnic Area",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Hinckley",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.21505,
        "longitude": -81.734636,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.734636,
          41.21505
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Kiwanis Picnic Area",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Bedford",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.379468,
        "longitude": -81.499005,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.499005,
          41.379468
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Deer Lick Cave to Oak Grove PA",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Brecksville",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.306074,
        "longitude": -81.607614,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.607614,
          41.306074
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Between Museum and Mgmt Center",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Brecksville",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.308275,
        "longitude": -81.626538,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.626538,
          41.308275
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Big Met Golf Course",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.44406,
        "longitude": -81.830912,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.830912,
          41.44406
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Mastick Woods Golf Course",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.441795,
        "longitude": -81.842863,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.842863,
          41.441795
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "North Mastick and Sycamore Picnic Areas",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.439343,
        "longitude": -81.845777,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.845777,
          41.439343
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "I-480 Bridge to Brookpark Rd Bridge",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.422883,
        "longitude": -81.857635,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.857635,
          41.422883
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Willow Bend Picnic Area",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.390891,
        "longitude": -81.868858,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.868858,
          41.390891
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Scenic Picnic Area",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.478218,
        "longitude": -81.832013,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.832013,
          41.478218
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Big Met Golf Course",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.446889,
        "longitude": -81.837779,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.837779,
          41.446889
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Rocky River Admin Hillsides",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.449902,
        "longitude": -81.839049,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.839049,
          41.449902
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Pawpaw Picnic Area",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.311016,
        "longitude": -81.78663,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78663,
          41.311016
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Snow Rd Picnic Area",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Big Creek",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.400028,
        "longitude": -81.760826,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.760826,
          41.400028
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Snow Rd Picnic Area",
        "ACTION": "ash tree removal",
        "field_3": null,
        "RES": "Big Creek",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.400028,
        "longitude": -81.760139,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.760139,
          41.400028
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Tinker's Creek Floodplain",
        "ACTION": "floodplain restoration, reforestation",
        "field_3": null,
        "RES": "Bedford",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.379008,
        "longitude": -81.566444,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.566444,
          41.379008
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Acacia",
        "ACTION": "forest and wetland restoration",
        "field_3": null,
        "RES": "Acacia",
        "TYPE": "aquatic",
        "COMMENT": "Where? Three Villages Easement",
        "category": "forest",
        "latitude": 41.505882,
        "longitude": -81.491667,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.491667,
          41.505882
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "I-480 bridge to Brookpark Bridge",
        "ACTION": "forest understory reforestation",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "need better boundaries",
        "category": "forest",
        "latitude": 41.423801,
        "longitude": -81.854796,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.854796,
          41.423801
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Fort Hill",
        "ACTION": "forest understory reforestation",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.409087,
        "longitude": -81.887773,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.887773,
          41.409087
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Rice Ridge",
        "ACTION": "forest understory restoration",
        "field_3": null,
        "RES": "Brecksville",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.30597,
        "longitude": -81.600963,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.600963,
          41.30597
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "West Creek Forested Areas",
        "ACTION": "forest understory restoration",
        "field_3": null,
        "RES": "West Creek",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.381896,
        "longitude": -81.694422,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.694422,
          41.381896
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Oak Grove",
        "ACTION": "forest understory restoration",
        "field_3": null,
        "RES": "Brecksville",
        "TYPE": "terrestrial",
        "COMMENT": "also vernal pool mgmt; split out occurrence",
        "category": "forest",
        "latitude": 41.307854,
        "longitude": -81.601155,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.601155,
          41.307854
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Hemlock Ravines",
        "ACTION": "hemlock woody adelgid detection surveys",
        "field_3": null,
        "RES": "South Chagrin",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.414479,
        "longitude": -81.416825,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.416825,
          41.414479
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Hemlock Ravines",
        "ACTION": "hemlock woody adelgid detection surveys",
        "field_3": null,
        "RES": "North Chagrin",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.567412,
        "longitude": -81.425638,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.425638,
          41.567412
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Settler's Bluff",
        "ACTION": "honeysuckle",
        "field_3": null,
        "RES": "Ohio & Erie Canal",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.437718,
        "longitude": -81.659126,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.659126,
          41.437718
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Powerline Field",
        "ACTION": "Honeysuckle",
        "field_3": null,
        "RES": "Ohio & Erie Canal",
        "TYPE": null,
        "COMMENT": "Treeplanting along Furnace Ridge (proper)",
        "category": "forest",
        "latitude": 41.441652,
        "longitude": -81.669668,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.669668,
          41.441652
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Worden's Ledges",
        "ACTION": "invasives, trails",
        "field_3": null,
        "RES": "Hinckley",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.205295,
        "longitude": -81.71575,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.71575,
          41.205295
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Bradley Woods",
        "ACTION": "large-scale deer exclosures",
        "field_3": null,
        "RES": "Bradley Woods",
        "TYPE": "terrestrial",
        "COMMENT": "Where? When?",
        "category": "forest",
        "latitude": 41.413186,
        "longitude": -81.957215,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.957215,
          41.413186
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Abram Terrace",
        "ACTION": "large-scale deer exclosures",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "where, when? Con. RR 1.4",
        "category": "forest",
        "latitude": 41.416786,
        "longitude": -81.869019,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.869019,
          41.416786
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Main Street  Wetlands",
        "ACTION": "large-scale deer exclosures",
        "field_3": null,
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": "where? when?",
        "category": "forest",
        "latitude": 41.349198,
        "longitude": -81.835176,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.835176,
          41.349198
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Mill Creek Connector boundary to boundary",
        "ACTION": "priority IP removal",
        "field_3": null,
        "RES": "Garfield Park",
        "TYPE": "terrestrial",
        "COMMENT": "really?",
        "category": "forest",
        "latitude": 41.437256,
        "longitude": -81.614651,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.614651,
          41.437256
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Polo Field to Miles Road",
        "ACTION": "priority IP removal",
        "field_3": null,
        "RES": "South Chagrin",
        "TYPE": "terrestrial",
        "COMMENT": "multiple occs",
        "category": "forest",
        "latitude": 41.456483,
        "longitude": -81.404967,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.404967,
          41.456483
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Porter Creek",
        "ACTION": "Priority IP removal",
        "field_3": null,
        "RES": "Huntington",
        "TYPE": "aquatic",
        "COMMENT": "Concept HU 1.2",
        "category": "forest",
        "latitude": 41.487981,
        "longitude": -81.934219,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.934219,
          41.487981
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Beach bluff",
        "ACTION": "priority IP removal",
        "field_3": null,
        "RES": "Huntington",
        "TYPE": "terrestrial",
        "COMMENT": "Concept HU 1.1",
        "category": "forest",
        "latitude": 41.490838,
        "longitude": -81.934126,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.934126,
          41.490838
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Route 82 and Weise Road: weed-o-rama",
        "ACTION": "Priority IP removal",
        "field_3": null,
        "RES": "Brecksville",
        "TYPE": "terrestrial",
        "COMMENT": "source population",
        "category": "forest",
        "latitude": 41.324416,
        "longitude": -81.609881,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.609881,
          41.324416
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Oak Grove",
        "ACTION": "protect plant community",
        "field_3": null,
        "RES": "Brecksville",
        "TYPE": null,
        "COMMENT": "protect vernal pool, scout and treat",
        "category": "forest",
        "latitude": 41.311201,
        "longitude": -81.601127,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.601127,
          41.311201
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Oak Grove",
        "ACTION": "protect plant community",
        "field_3": null,
        "RES": "Brecksville",
        "TYPE": "terrestrial",
        "COMMENT": "protect wetlands; scout & treat",
        "category": "forest",
        "latitude": 41.30853,
        "longitude": -81.604646,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.604646,
          41.30853
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Ranger Stables - Mirror Valley - Bellus Fields",
        "ACTION": "reforestation",
        "field_3": null,
        "RES": "Hinckley",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.226089,
        "longitude": -81.700374,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.700374,
          41.226089
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Redwing Field Restoration",
        "ACTION": "reforestation",
        "field_3": null,
        "RES": "Hinckley",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.218321,
        "longitude": -81.723975,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.723975,
          41.218321
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "forested areas",
        "ACTION": "restoration",
        "field_3": null,
        "RES": "West Creek",
        "TYPE": "terrestrial",
        "COMMENT": "forest understory restoration (from where?)",
        "category": "forest",
        "latitude": 41.389402,
        "longitude": -81.689978,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.689978,
          41.389402
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Seneca",
        "ACTION": "restoration, wildlife habitat improvement",
        "field_3": null,
        "RES": "Brecksville",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.305505,
        "longitude": -81.67436,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.67436,
          41.305505
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Rocky River Admin",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.448784,
        "longitude": -81.836445,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.836445,
          41.448784
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Rocky River Nature Center",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.410027,
        "longitude": -81.884302,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.884302,
          41.410027
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Barrett Rd",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.379831,
        "longitude": -81.866134,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.866134,
          41.379831
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Oak Grove",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Brecksville",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.307454,
        "longitude": -81.601573,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.601573,
          41.307454
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Bonnie Park Picnic Area",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.333463,
        "longitude": -81.832834,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.832834,
          41.333463
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Sulphur Springs",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "South Chagrin",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.417668,
        "longitude": -81.427671,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.427671,
          41.417668
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Forbes Woods",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Bedford",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.374012,
        "longitude": -81.504898,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.504898,
          41.374012
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Pawpaw Picnic Area",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.311007,
        "longitude": -81.78489,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78489,
          41.311007
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Fort Hill",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.408355,
        "longitude": -81.888571,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.888571,
          41.408355
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Little Cedar Point Picnic Area",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.407518,
        "longitude": -81.889748,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.889748,
          41.407518
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Rocky River Admin Hillsides",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.450688,
        "longitude": -81.837266,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.837266,
          41.450688
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Rocky River Admin",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.449046,
        "longitude": -81.837511,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.837511,
          41.449046
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Between the Bridges",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "need better boundaries",
        "category": "forest",
        "latitude": 41.422207,
        "longitude": -81.857828,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.857828,
          41.422207
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Fort Hill",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.409224,
        "longitude": -81.884856,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.884856,
          41.409224
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Fort Hill",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.409766,
        "longitude": -81.887116,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.887116,
          41.409766
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Valley Pkwy North of Railroad Trestle",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.349258,
        "longitude": -81.843266,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.843266,
          41.349258
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Pawpaw Picnic Area",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.308461,
        "longitude": -81.782588,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.782588,
          41.308461
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Pawpaw Picnic Area",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.310167,
        "longitude": -81.784976,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.784976,
          41.310167
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Pawpaw Picnic Area",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.310614,
        "longitude": -81.785757,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.785757,
          41.310614
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Pawpaw Picnic Area",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.311209,
        "longitude": -81.786537,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.786537,
          41.311209
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Camp Cheerful",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.319486,
        "longitude": -81.804,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.804,
          41.319486
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Snow Rd Picnic Area",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Big Creek",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.399704,
        "longitude": -81.760197,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.760197,
          41.399704
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Fowles Marsh",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Big Creek",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.368098,
        "longitude": -81.830504,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.830504,
          41.368098
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Fowles Marsh",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Big Creek",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.365212,
        "longitude": -81.830923,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.830923,
          41.365212
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Snow Rd Picnic Area",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Big Creek",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.399582,
        "longitude": -81.761106,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.761106,
          41.399582
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Snow Rd Picnic Area",
        "ACTION": "tree planting",
        "field_3": null,
        "RES": "Big Creek",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "forest",
        "latitude": 41.400325,
        "longitude": -81.76071,
        "marker-size": "small",
        "marker-color": "#54945C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.76071,
          41.400325
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Royalview",
        "ACTION": "IP control",
        "field_3": null,
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": "Buckthorn treated 2013 - need occ point and treatment polygon;",
        "category": "IP vector",
        "latitude": 41.30069,
        "longitude": -81.791042,
        "marker-size": "small",
        "marker-color": "#FF860D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.791042,
          41.30069
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Johnson's Picnic Area",
        "ACTION": "facility and trail layout/construction",
        "field_3": null,
        "RES": "Hinckley",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "IP vector",
        "latitude": 41.214691,
        "longitude": -81.715039,
        "marker-size": "small",
        "marker-color": "#FF860D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.715039,
          41.214691
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Along Canal",
        "ACTION": "Humulus japonicus",
        "field_3": null,
        "RES": "Ohio & Erie Canal",
        "TYPE": null,
        "COMMENT": "visit site with Ranger escort (Hobo Camp)",
        "category": "IP Vector",
        "latitude": 41.438355,
        "longitude": -81.669629,
        "marker-size": "small",
        "marker-color": "#FF860D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.669629,
          41.438355
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Greathouse Wetlands and Washout",
        "ACTION": "hydrilla Control",
        "field_3": null,
        "RES": "West Creek",
        "TYPE": "aquatic",
        "COMMENT": "N/A",
        "category": "IP vector",
        "latitude": 41.389227,
        "longitude": -81.696687,
        "marker-size": "small",
        "marker-color": "#FF860D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.696687,
          41.389227
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Blue Heron Marsh",
        "ACTION": "hydrilla control",
        "field_3": null,
        "RES": "Ohio & Erie Canal",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "IP vector",
        "latitude": 41.428826,
        "longitude": -81.664807,
        "marker-size": "small",
        "marker-color": "#FF860D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.664807,
          41.428826
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Sunset Pond",
        "ACTION": "hydrilla control",
        "field_3": null,
        "RES": "North Chagrin",
        "TYPE": "aquatic",
        "COMMENT": "N/A",
        "category": "IP vector",
        "latitude": 41.560737,
        "longitude": -81.436136,
        "marker-size": "small",
        "marker-color": "#FF860D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.436136,
          41.560737
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Sanctuary Marsh",
        "ACTION": "hydrilla Control",
        "field_3": null,
        "RES": "North Chagrin",
        "TYPE": "aquatic",
        "COMMENT": "N/A",
        "category": "IP vector",
        "latitude": 41.562773,
        "longitude": -81.435425,
        "marker-size": "small",
        "marker-color": "#FF860D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.435425,
          41.562773
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Old Field",
        "ACTION": "Lesser celandine",
        "field_3": null,
        "RES": "South Chagrin",
        "TYPE": "forest",
        "COMMENT": "source population",
        "category": "IP vector",
        "latitude": 41.446395,
        "longitude": -81.409443,
        "marker-size": "small",
        "marker-color": "#FF860D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.409443,
          41.446395
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "sandpiper meadow",
        "ACTION": "Phrag",
        "field_3": null,
        "RES": "West Creek",
        "TYPE": null,
        "COMMENT": "N/A",
        "category": "IP vector",
        "latitude": 41.381109,
        "longitude": -81.694788,
        "marker-size": "small",
        "marker-color": "#FF860D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.694788,
          41.381109
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Upper West Creek",
        "ACTION": "Phragmites",
        "field_3": null,
        "RES": "West Creek",
        "TYPE": null,
        "COMMENT": "source pop on private property",
        "category": "IP Vector",
        "latitude": 41.378196,
        "longitude": -81.691779,
        "marker-size": "small",
        "marker-color": "#FF860D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.691779,
          41.378196
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Upper West Creek",
        "ACTION": "priority IP removal",
        "field_3": null,
        "RES": "West Creek",
        "TYPE": "terrestrial",
        "COMMENT": "source pops of many weeds",
        "category": "IP vector",
        "latitude": 41.384187,
        "longitude": -81.692895,
        "marker-size": "small",
        "marker-color": "#FF860D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.692895,
          41.384187
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "floodplain forests southern half of RR Res",
        "ACTION": "Priority IP removal",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "lesser celandine",
        "category": "IP vector",
        "latitude": 41.409683,
        "longitude": -81.88027,
        "marker-size": "small",
        "marker-color": "#FF860D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88027,
          41.409683
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Hinckley everywhere",
        "ACTION": "Priority IP removal",
        "field_3": null,
        "RES": "Hinckley",
        "TYPE": "both",
        "COMMENT": "source population, all trails",
        "category": "IP vector",
        "latitude": 41.209848,
        "longitude": -81.706286,
        "marker-size": "small",
        "marker-color": "#FF860D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.706286,
          41.209848
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Rising Valley",
        "ACTION": "protect plant community",
        "field_3": null,
        "RES": "Hinckley",
        "TYPE": null,
        "COMMENT": "source population from ODOT; Eur. & native alder",
        "category": "IP vector",
        "latitude": 41.262769,
        "longitude": -81.689105,
        "marker-size": "small",
        "marker-color": "#FF860D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.689105,
          41.262769
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Johnsons Creek Valley",
        "ACTION": "protect plant community",
        "field_3": null,
        "RES": "Hinckley",
        "TYPE": "terrestrial",
        "COMMENT": "protect valley, scout headwaters for garlic mustard",
        "category": "IP vector",
        "latitude": 41.208644,
        "longitude": -81.731455,
        "marker-size": "small",
        "marker-color": "#FF860D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.731455,
          41.208644
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Canal from Old Rockside to Warner Road",
        "ACTION": "remove purple loosestrife",
        "field_3": null,
        "RES": "Ohio & Erie Canal",
        "TYPE": "aquatic",
        "COMMENT": "has gotten thick in recent years",
        "category": "IP vector",
        "latitude": 41.4111,
        "longitude": -81.629583,
        "marker-size": "small",
        "marker-color": "#FF860D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.629583,
          41.4111
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Rising Valley",
        "ACTION": "restore",
        "field_3": null,
        "RES": "Hinckley",
        "TYPE": "aquatic",
        "COMMENT": "map and remove typha and phrag",
        "category": "IP vector",
        "latitude": 41.257427,
        "longitude": -81.693556,
        "marker-size": "small",
        "marker-color": "#FF860D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.693556,
          41.257427
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "East of State Road",
        "ACTION": "restore",
        "field_3": null,
        "RES": "Hinckley",
        "TYPE": "terrestrial",
        "COMMENT": "scout / remove dames rocket, garlic mustard",
        "category": "IP vector",
        "latitude": 41.211698,
        "longitude": -81.699857,
        "marker-size": "small",
        "marker-color": "#FF860D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.699857,
          41.211698
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Villa Angela",
        "ACTION": "restore",
        "field_3": null,
        "RES": "Euclid Creek",
        "TYPE": "terrestrial",
        "COMMENT": "knotweed! CMNH joint project?",
        "category": "IP Vector",
        "latitude": 41.584437,
        "longitude": -81.559968,
        "marker-size": "small",
        "marker-color": "#FF860D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.559968,
          41.584437
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Bedford trails",
        "ACTION": "survey for invasive plants",
        "field_3": null,
        "RES": "Bedford",
        "TYPE": "terrestrial",
        "COMMENT": "need better data",
        "category": "IP vector",
        "latitude": 41.387902,
        "longitude": -81.541841,
        "marker-size": "small",
        "marker-color": "#FF860D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.541841,
          41.387902
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Washington Creek Wetland",
        "ACTION": "IP removal to protect wetlands",
        "field_3": null,
        "RES": "Washington",
        "TYPE": "aquatic",
        "COMMENT": "Work with staff: Audubon cert.; need occ point; yellow floating heart removal",
        "category": "IP vector",
        "latitude": 41.457845,
        "longitude": -81.663884,
        "marker-size": "small",
        "marker-color": "#FF860D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.663884,
          41.457845
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Windy Ridge PA - entrance road slope",
        "ACTION": "priority IP removal",
        "field_3": null,
        "RES": "Garfield Park",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "meadow",
        "latitude": 41.434692,
        "longitude": -81.608555,
        "marker-size": "small",
        "marker-color": "#835B43"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.608555,
          41.434692
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Strongsville Wildlife Area",
        "ACTION": "protect plant community",
        "field_3": null,
        "RES": "Mill Stream RUn",
        "TYPE": null,
        "COMMENT": "wet meadow, continue invasive plant treatment",
        "category": "meadow",
        "latitude": 41.315339,
        "longitude": -81.809922,
        "marker-size": "small",
        "marker-color": "#835B43"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.809922,
          41.315339
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Phone Lot Field",
        "ACTION": "remove thistle",
        "field_3": null,
        "RES": "South Chagrin",
        "TYPE": "terrestrial",
        "COMMENT": "all managed meadows",
        "category": "meadow",
        "latitude": 41.440213,
        "longitude": -81.408883,
        "marker-size": "small",
        "marker-color": "#835B43"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.408883,
          41.440213
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "sandpiper meadow",
        "ACTION": "restoration",
        "field_3": null,
        "RES": "West Creek",
        "TYPE": "terrestrial",
        "COMMENT": "shortgrass prairie establishment",
        "category": "meadow",
        "latitude": 41.387348,
        "longitude": -81.694594,
        "marker-size": "small",
        "marker-color": "#835B43"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.694594,
          41.387348
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Jackson Field",
        "ACTION": "thistle removal",
        "field_3": null,
        "RES": "South Chagrin",
        "TYPE": "terrestrial",
        "COMMENT": "all managed meadows",
        "category": "meadow",
        "latitude": 41.433147,
        "longitude": -81.416372,
        "marker-size": "small",
        "marker-color": "#835B43"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.416372,
          41.433147
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Old Field",
        "ACTION": "thistle removal",
        "field_3": null,
        "RES": "South Chagrin",
        "TYPE": "terrestrial",
        "COMMENT": "all managed meadows",
        "category": "meadow",
        "latitude": 41.446537,
        "longitude": -81.40806,
        "marker-size": "small",
        "marker-color": "#835B43"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.40806,
          41.446537
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Strawberry Field",
        "ACTION": "Thistle removal",
        "field_3": null,
        "RES": "North Chagrin",
        "TYPE": "terrestrial",
        "COMMENT": "all managed meadows",
        "category": "meadow",
        "latitude": 41.578197,
        "longitude": -81.433679,
        "marker-size": "small",
        "marker-color": "#835B43"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.433679,
          41.578197
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Middle Oxbow Lagoon",
        "ACTION": "thistle removal",
        "field_3": null,
        "RES": "North Chagrin",
        "TYPE": "terrestrial",
        "COMMENT": "all managed meadows",
        "category": "meadow",
        "latitude": 41.579014,
        "longitude": -81.416163,
        "marker-size": "small",
        "marker-color": "#835B43"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.416163,
          41.579014
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Old River Farm",
        "ACTION": "thistle removal",
        "field_3": null,
        "RES": "North Chagrin",
        "TYPE": "terrestrial",
        "COMMENT": "all managed meadows",
        "category": "meadow",
        "latitude": 41.577331,
        "longitude": -81.416452,
        "marker-size": "small",
        "marker-color": "#835B43"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.416452,
          41.577331
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Colsons Field",
        "ACTION": "thistle removal",
        "field_3": null,
        "RES": "North Chagrin",
        "TYPE": "terrestrial",
        "COMMENT": "all managed meadows",
        "category": "meadow",
        "latitude": 41.571705,
        "longitude": -81.434611,
        "marker-size": "small",
        "marker-color": "#835B43"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.434611,
          41.571705
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Rogers Meadow north",
        "ACTION": "thistle removal",
        "field_3": null,
        "RES": "North Chagrin",
        "TYPE": "terrestrial",
        "COMMENT": "all managed meadows",
        "category": "meadow",
        "latitude": 41.570311,
        "longitude": -81.415263,
        "marker-size": "small",
        "marker-color": "#835B43"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.415263,
          41.570311
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Rogers Meadow",
        "ACTION": "thistle removal",
        "field_3": null,
        "RES": "North Chagrin",
        "TYPE": "terrestrial",
        "COMMENT": "all managed meadows",
        "category": "meadow",
        "latitude": 41.568387,
        "longitude": -81.415874,
        "marker-size": "small",
        "marker-color": "#835B43"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.415874,
          41.568387
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "St. Bart's Field",
        "ACTION": "thistle removal",
        "field_3": null,
        "RES": "North Chagrin",
        "TYPE": "terrestrial",
        "COMMENT": "all managed meadows",
        "category": "meadow",
        "latitude": 41.558504,
        "longitude": -81.434771,
        "marker-size": "small",
        "marker-color": "#835B43"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.434771,
          41.558504
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Oxbow Lagoon",
        "ACTION": "restoration",
        "field_3": null,
        "RES": "Rocky River",
        "TYPE": "aquatic",
        "COMMENT": "Concept RR 1.1",
        "category": "pond",
        "latitude": 41.402201,
        "longitude": -81.887345,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.887345,
          41.402201
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Lake Isaac",
        "ACTION": "restoration site",
        "field_3": null,
        "RES": "Big Creek",
        "TYPE": "aquatic",
        "COMMENT": "typha, watch for hydrilla",
        "category": "pond",
        "latitude": 41.356652,
        "longitude": -81.825149,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.825149,
          41.356652
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Strawberry Pond",
        "ACTION": "water quality, flooding",
        "field_3": null,
        "RES": "North Chagrin",
        "TYPE": "aquatic",
        "COMMENT": "N/A",
        "category": "pond",
        "latitude": 41.579718,
        "longitude": -81.431018,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.431018,
          41.579718
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Wallace Lake & Rocky River",
        "ACTION": "hydrilla control",
        "field_3": null,
        "RES": "Mill Stream Run",
        "TYPE": "aquatic",
        "COMMENT": "contract, surveys",
        "category": "pond, stream",
        "latitude": 41.360036,
        "longitude": -81.859655,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.859655,
          41.360036
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Seneca Golf Course",
        "ACTION": "restore",
        "field_3": null,
        "RES": "Brecksville",
        "TYPE": "restore",
        "COMMENT": "remove cattail to protect bur-reed",
        "category": "pond, stream",
        "latitude": 41.298862,
        "longitude": -81.663166,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.663166,
          41.298862
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Ranger Lake",
        "ACTION": "dam infrastructure, expansion",
        "field_3": null,
        "RES": "Mill Stream Run",
        "TYPE": "aquatic",
        "COMMENT": "N/A",
        "category": "pond, wetland",
        "latitude": 41.336824,
        "longitude": -81.825374,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.825374,
          41.336824
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Baldwin Lake",
        "ACTION": "restoration",
        "field_3": null,
        "RES": "Mill Stream Run",
        "TYPE": "aquatic",
        "COMMENT": "concept plan",
        "category": "pond, wetland",
        "latitude": 41.35972,
        "longitude": -81.856818,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.856818,
          41.35972
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Mirror Valley",
        "ACTION": "priority watersheds/subwatersheds",
        "field_3": null,
        "RES": "Hinckley",
        "TYPE": "aquatic",
        "COMMENT": "N/A",
        "category": "stream",
        "latitude": 41.223043,
        "longitude": -81.704456,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.704456,
          41.223043
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Ledge Creek",
        "ACTION": "priority watersheds/subwatersheds",
        "field_3": null,
        "RES": "Hinckley",
        "TYPE": "aquatic",
        "COMMENT": "N/A",
        "category": "stream",
        "latitude": 41.205504,
        "longitude": -81.725127,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.725127,
          41.205504
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Johnson's Creek",
        "ACTION": "priority watersheds/subwatersheds",
        "field_3": null,
        "RES": "Hinckley",
        "TYPE": "aquatic",
        "COMMENT": "N/A",
        "category": "stream",
        "latitude": 41.211541,
        "longitude": -81.722197,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.722197,
          41.211541
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "East Branch Rocky River",
        "ACTION": "priority watersheds/subwatersheds",
        "field_3": null,
        "RES": "Hinckley",
        "TYPE": "aquatic",
        "COMMENT": "N/A",
        "category": "stream",
        "latitude": 41.212296,
        "longitude": -81.70104,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.70104,
          41.212296
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Big Creek",
        "ACTION": "restoration site",
        "field_3": null,
        "RES": "Brookside",
        "TYPE": "aquatic",
        "COMMENT": "N/A",
        "category": "stream",
        "latitude": 41.45029,
        "longitude": -81.725209,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.725209,
          41.45029
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "big creek bluffs and seeps - here or creekside",
        "ACTION": "restoration site?",
        "field_3": null,
        "RES": "Brookside",
        "TYPE": "terrestrial",
        "COMMENT": "N/A",
        "category": "stream",
        "latitude": 41.448687,
        "longitude": -81.721397,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.721397,
          41.448687
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Snowville Streams",
        "ACTION": "stream or wetland restoration",
        "field_3": null,
        "RES": "Brecksville",
        "TYPE": "aquatic",
        "COMMENT": "N/A",
        "category": "stream",
        "latitude": 41.291396,
        "longitude": -81.584334,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.584334,
          41.291396
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Wildwood Stream Restoration (Euclid Creek)",
        "ACTION": "stream restoration",
        "field_3": null,
        "RES": "Euclid Creek",
        "TYPE": "aquatic",
        "COMMENT": "N/A",
        "category": "stream",
        "latitude": 41.586137,
        "longitude": -81.561019,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.561019,
          41.586137
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Sulphur Springs",
        "ACTION": "stream restoration, IP removal",
        "field_3": null,
        "RES": "South Chagrin",
        "TYPE": "aquatic",
        "COMMENT": "N/A",
        "category": "stream",
        "latitude": 41.419904,
        "longitude": -81.424244,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.424244,
          41.419904
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Sulphur Springs - Lambert",
        "ACTION": "watershed protection",
        "field_3": null,
        "RES": "South Chagrin",
        "TYPE": "aquatic",
        "COMMENT": "private property",
        "category": "stream",
        "latitude": 41.417679,
        "longitude": -81.429039,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.429039,
          41.417679
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Valley Parkway: Albion Road to I-71",
        "ACTION": "IP removal to protect wetlands",
        "field_3": null,
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": "need to survey",
        "category": "wetland",
        "latitude": 41.33157,
        "longitude": -81.824277,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.824277,
          41.33157
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Main Street to Valley Parkway south of RR trestle",
        "ACTION": "IP removal to protect wetlands",
        "field_3": null,
        "RES": "Mill Stream Run",
        "TYPE": "aquatic",
        "COMMENT": "need locs from Reinier",
        "category": "wetland",
        "latitude": 41.349287,
        "longitude": -81.837096,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.837096,
          41.349287
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Stongsville Wildlife Area",
        "ACTION": "protect plant community",
        "field_3": null,
        "RES": "Mill Stream Run",
        "TYPE": "aquatic",
        "COMMENT": "scout and treat in wet woods; rare spp. present",
        "category": "wetland",
        "latitude": 41.315339,
        "longitude": -81.80753,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80753,
          41.315339
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Rising Valley",
        "ACTION": "protect plant community",
        "field_3": null,
        "RES": "Hinckley",
        "TYPE": null,
        "COMMENT": "phalaris, phragmites, alnus, etc",
        "category": "wetland",
        "latitude": 41.258884,
        "longitude": -81.690966,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.690966,
          41.258884
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Bur-reed marsh",
        "ACTION": "protect plant community",
        "field_3": null,
        "RES": "Big Creek",
        "TYPE": "aquatic",
        "COMMENT": "future plans for Lake Abram marsh?",
        "category": "wetland",
        "latitude": 41.378578,
        "longitude": -81.838876,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.838876,
          41.378578
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Wetlands",
        "ACTION": "protection and restoration",
        "field_3": null,
        "RES": "Bradley Woods",
        "TYPE": "aquatic",
        "COMMENT": "N/A",
        "category": "wetland",
        "latitude": 41.412062,
        "longitude": -81.951804,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.951804,
          41.412062
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Bunns Lake",
        "ACTION": "Remove flowering rush",
        "field_3": null,
        "RES": "Bradley Woods",
        "TYPE": "aquatic",
        "COMMENT": "need parkwide surveys",
        "category": "wetland",
        "latitude": 41.417654,
        "longitude": -81.94978,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94978,
          41.417654
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "working wetlands",
        "ACTION": "restoration",
        "field_3": null,
        "RES": "West Creek",
        "TYPE": "aquatic",
        "COMMENT": "prevent cattail establishment",
        "category": "wetland",
        "latitude": 41.389033,
        "longitude": -81.695574,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.695574,
          41.389033
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Wolf Creek beyond the broken dam",
        "ACTION": "restoration site",
        "field_3": null,
        "RES": "Garfield Park",
        "TYPE": "aquatic",
        "COMMENT": "from concept plan",
        "category": "wetland",
        "latitude": 41.429045,
        "longitude": -81.604624,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.604624,
          41.429045
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Washington wetland",
        "ACTION": "restoration site",
        "field_3": null,
        "RES": "Washington",
        "TYPE": "aquatic",
        "COMMENT": "from concept plan",
        "category": "wetland",
        "latitude": 41.458135,
        "longitude": -81.663979,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.663979,
          41.458135
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Lake to Lake Trail: Lake Isaac to Fowles Marsh",
        "ACTION": "Scout",
        "field_3": null,
        "RES": "Big Creek",
        "TYPE": "Protect",
        "COMMENT": "FInd alder-skunk cabbage seeps; remove IP",
        "category": "wetland",
        "latitude": 41.362911,
        "longitude": -81.829217,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.829217,
          41.362911
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Snowville Mitigation Wetlands (Horse Show Field)",
        "ACTION": "wetland restoration",
        "field_3": null,
        "RES": "Brecksville",
        "TYPE": "aquatic",
        "COMMENT": "N/A",
        "category": "wetland",
        "latitude": 41.319386,
        "longitude": -81.594013,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.594013,
          41.319386
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Vernal Pool Restoration Sites",
        "ACTION": "wetland restoration",
        "field_3": null,
        "RES": "Brookside",
        "TYPE": "aquatic",
        "COMMENT": "N/A",
        "category": "wetland",
        "latitude": 41.448286,
        "longitude": -81.720605,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.720605,
          41.448286
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Fowles Marsh",
        "ACTION": "wetland restoration",
        "field_3": null,
        "RES": "Big Creek",
        "TYPE": "aquatic",
        "COMMENT": "N/A",
        "category": "wetland",
        "latitude": 41.365955,
        "longitude": -81.829448,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.829448,
          41.365955
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Park Synagogue Wetland",
        "ACTION": "wetland restoration",
        "field_3": null,
        "RES": "South Chagrin",
        "TYPE": "aquatic",
        "COMMENT": "N/A",
        "category": "wetland",
        "latitude": 41.443384,
        "longitude": -81.408608,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.408608,
          41.443384
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "SITE_NAME": "Riverview and Snowville wetlands",
        "ACTION": "wetland restoration",
        "field_3": null,
        "RES": "Brecksville",
        "TYPE": "aquatic",
        "COMMENT": "future restoration plans?",
        "category": "wetland",
        "latitude": 41.284979,
        "longitude": -81.569198,
        "marker-size": "small",
        "marker-color": "#0162A9"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.569198,
          41.284979
        ]
      }
    }
  ]
};



var myLayer2 = L.mapbox.featureLayer().addTo(map);
		
// Add custom popup html to each marker
myLayer2.on('layeradd', function(e) {
    var marker = e.layer;
    var feature = marker.feature;


    // Create custom popup content
    var popupContent2 =  '<div class="popup_container">' + '<h3>' + feature.properties.RES + '</h3>' + '<h4>' + 'Site Name:' + '</h4>' + '<p>' + feature.properties.SITE_NAME + '</p>' + '<h4>' + 'Action to be Taken:' + '</h4>' + '<p>' + feature.properties.ACTION + '</p>' + '<h4>' + 'Additional Info:' + '</h4>' + '<p>' + feature.properties.COMMENT + '</p>' + '</div>'


    // http://leafletjs.com/reference.html#popup
    marker.bindPopup(popupContent2,{
        closeButton: false,
        minWidth: 320
    });
});

// Add features to the map
myLayer2.setGeoJSON(geoJsonData);
		
		
		
		
		
		
		
		
		
		// Layers
		
		var cmparks2 = L.tileLayer('http://maps1.clemetparks.com/tilestache/tilestache.cgi/basemap/{z}/{x}/{y}.jpg', {
			attribution: 'Map data &copy; <a href="http://clevelandmetroparks.com" target="_blank">Cleveland Metroparks</a>, Imagery &copy <a href="http://maps.clevelandmetroparks.com" target="_blank">Cleveland Metroparks</a>'
		}).addTo(map);

		var aerial = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.map-7cfqm6fy/{z}/{x}/{y}.jpg', {
			attribution: 'Imagery &copy <a href="http://Mapbox.com" target="_blank">MapBox</a>'
		});


		// Layer Controller

		var baseLayers = {
			"Cleveland Metroparks": cmparks2,
			"Aerial Imagery": aerial
		};

		var overlays = null


		L.control.layers(baseLayers, overlays).addTo(map);

		map.setView([41.3974, -81.671], 10)

