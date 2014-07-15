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
        "ID": 43,
        "SITE_NAME": "Rocky River Admin",
        "ACTION": "tree planting",
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.448784,
        "longitude": -81.836445,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83644485489913,
          41.44878382946339
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 42,
        "SITE_NAME": "Rocky River Nature Center",
        "ACTION": "tree planting",
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.410027,
        "longitude": -81.884302,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88430242658478,
          41.410026683110125
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 41,
        "SITE_NAME": "Barrett Rd",
        "ACTION": "tree planting",
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.379831,
        "longitude": -81.866134,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86613426181121,
          41.3798309077756
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 40,
        "SITE_NAME": "Oak Grove",
        "ACTION": "tree planting",
        "RES": "Brecksville",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.307454,
        "longitude": -81.601573,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60157282600235,
          41.30745372129122
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 39,
        "SITE_NAME": "Bonnie Park Picnic Area",
        "ACTION": "tree planting",
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.333463,
        "longitude": -81.832834,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8328337963918,
          41.33346329266152
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 38,
        "SITE_NAME": "Sulphur Springs",
        "ACTION": "tree planting",
        "RES": "South Chagrin",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.417668,
        "longitude": -81.427671,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42767100791568,
          41.417667631145925
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 37,
        "SITE_NAME": "Forbes Woods",
        "ACTION": "tree planting",
        "RES": "Bedford",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.374012,
        "longitude": -81.504898,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.50489846835944,
          41.37401155052174
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 36,
        "SITE_NAME": "Pawpaw Picnic Area",
        "ACTION": "tree planting",
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.311007,
        "longitude": -81.78489,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78489020305192,
          41.31100742666844
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 35,
        "SITE_NAME": "Fort Hill",
        "ACTION": "tree planting",
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.408355,
        "longitude": -81.888571,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88857087942124,
          41.4083546295954
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 49,
        "SITE_NAME": "Forbes Woods",
        "ACTION": "ash tree removal",
        "RES": "Bedford",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.373677,
        "longitude": -81.505376,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.50537593755702,
          41.37367689612697
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 48,
        "SITE_NAME": "Pawpaw Picnic Area",
        "ACTION": "ash tree removal",
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.311245,
        "longitude": -81.784567,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78456734077695,
          41.311244767479444
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 47,
        "SITE_NAME": "Eastland Road near Railroad Bridge",
        "ACTION": "ash tree removal",
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.348788,
        "longitude": -81.842918,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84291757484554,
          41.3487876034438
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 46,
        "SITE_NAME": "Bonnie Park",
        "ACTION": "ash tree removal",
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.332789,
        "longitude": -81.833678,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83367847295307,
          41.332789171994264
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 67,
        "SITE_NAME": "North of the Chalet",
        "ACTION": "ash tree removal",
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.325138,
        "longitude": -81.817353,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81735279861566,
          41.32513763538701
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 59,
        "SITE_NAME": "York Rd Picnic Area",
        "ACTION": "ash tree removal",
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.304512,
        "longitude": -81.75716,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.75715966516692,
          41.30451211820012
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 66,
        "SITE_NAME": "Strawberry Picnic Area",
        "ACTION": "ash tree removal",
        "RES": "North Chagrin",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.579689,
        "longitude": -81.429153,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42915298677491,
          41.57968850008329
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 65,
        "SITE_NAME": "Ox Ln and Oxbow Ln",
        "ACTION": "ash tree removal",
        "RES": "North Chagrin",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.566287,
        "longitude": -81.420813,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42081250031009,
          41.56628707406151
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 64,
        "SITE_NAME": "Judge's Lake",
        "ACTION": "ash tree removal",
        "RES": "Hinckley",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.20324,
        "longitude": -81.700665,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.70066467194272,
          41.20324028264191
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 63,
        "SITE_NAME": "Johnson's Picnic Area",
        "ACTION": "ash tree removal",
        "RES": "Hinckley",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.217151,
        "longitude": -81.714638,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.71463760956574,
          41.217150794224565
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 62,
        "SITE_NAME": "Kiawanis Picnic Area",
        "ACTION": "ash tree removal",
        "RES": "Hinckley",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.21505,
        "longitude": -81.734636,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.73463641751965,
          41.21504960872005
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 61,
        "SITE_NAME": "Kiwanis Picnic Area",
        "ACTION": "ash tree removal",
        "RES": "Bedford",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.379468,
        "longitude": -81.499005,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.49900456091885,
          41.37946750548805
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 60,
        "SITE_NAME": "Deer Lick Cave to Oak Grove PA",
        "ACTION": "ash tree removal",
        "RES": "Brecksville",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.306074,
        "longitude": -81.607614,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60761448057423,
          41.30607354252044
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 58,
        "SITE_NAME": "Between Museum and Mgmt Center",
        "ACTION": "ash tree removal",
        "RES": "Brecksville",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.308275,
        "longitude": -81.626538,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.62653794278896,
          41.30827523504713
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 57,
        "SITE_NAME": "Big Met Golf Course",
        "ACTION": "ash tree removal",
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.44406,
        "longitude": -81.830912,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83091168627354,
          41.44405973416409
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 56,
        "SITE_NAME": "Mastick Woods Golf Course",
        "ACTION": "ash tree removal",
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.441795,
        "longitude": -81.842863,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84286323168548,
          41.441795395653855
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 55,
        "SITE_NAME": "North Mastick and Sycamore Picnic Areas",
        "ACTION": "ash tree removal",
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.439343,
        "longitude": -81.845777,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84577733420106,
          41.43934294992709
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 54,
        "SITE_NAME": "I-480 Bridge to Brookpark Rd Bridge",
        "ACTION": "ash tree removal",
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.422883,
        "longitude": -81.857635,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85763529332591,
          41.4228831338642
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 53,
        "SITE_NAME": "Willow Bend Picnic Area",
        "ACTION": "ash tree removal",
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.390891,
        "longitude": -81.868858,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86885792532792,
          41.390890792114675
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 52,
        "SITE_NAME": "Scenic Picnic Area",
        "ACTION": "ash tree removal",
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.478218,
        "longitude": -81.832013,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8320131329918,
          41.47821790989432
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 51,
        "SITE_NAME": "Little Cedar Point Picnic Area",
        "ACTION": "tree planting",
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.407518,
        "longitude": -81.889748,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88974832125173,
          41.40751844102752
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 111,
        "SITE_NAME": "Big Met Golf Course",
        "ACTION": "ash tree removal",
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.446889,
        "longitude": -81.837779,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83777883024561,
          41.44688920955714
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 110,
        "SITE_NAME": "Rocky River Admin Hillsides",
        "ACTION": "ash tree removal",
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.449902,
        "longitude": -81.839049,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83904865920593,
          41.44990179739261
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 109,
        "SITE_NAME": "Rocky River Admin Hillsides",
        "ACTION": "tree planting",
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.450688,
        "longitude": -81.837266,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83726623873869,
          41.45068766686536
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 108,
        "SITE_NAME": "Rocky River Admin",
        "ACTION": "tree planting",
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.449046,
        "longitude": -81.837511,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83751088468519,
          41.449046062028884
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 112,
        "SITE_NAME": "Between the Bridges",
        "ACTION": "tree planting",
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": "need better boundaries",
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.422207,
        "longitude": -81.857828,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8578281480502,
          41.422206919967294
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 114,
        "SITE_NAME": "Fort Hill",
        "ACTION": "tree planting",
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.409224,
        "longitude": -81.884856,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88485570023302,
          41.40922442803575
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 113,
        "SITE_NAME": "Fort Hill",
        "ACTION": "tree planting",
        "RES": "Rocky River",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.409766,
        "longitude": -81.887116,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88711576278624,
          41.4097661451176
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 115,
        "SITE_NAME": "Valley Pkwy North of Railroad Trestle",
        "ACTION": "tree planting",
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.349258,
        "longitude": -81.843266,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84326588933098,
          41.34925815748945
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 121,
        "SITE_NAME": "Pawpaw Picnic Area",
        "ACTION": "ash tree removal",
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.311016,
        "longitude": -81.78663,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78663035272021,
          41.31101611714888
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 120,
        "SITE_NAME": "Pawpaw Picnic Area",
        "ACTION": "tree planting",
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.308461,
        "longitude": -81.782588,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78258786969974,
          41.30846089080749
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 119,
        "SITE_NAME": "Pawpaw Picnic Area",
        "ACTION": "tree planting",
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.310167,
        "longitude": -81.784976,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.7849760801297,
          41.31016730306847
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 118,
        "SITE_NAME": "Pawpaw Picnic Area",
        "ACTION": "tree planting",
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.310614,
        "longitude": -81.785757,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78575661719704,
          41.31061358813796
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 117,
        "SITE_NAME": "Pawpaw Picnic Area",
        "ACTION": "tree planting",
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.311209,
        "longitude": -81.786537,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78653715426441,
          41.311208630145096
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 116,
        "SITE_NAME": "Camp Cheerful",
        "ACTION": "tree planting",
        "RES": "Mill Stream Run",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.319486,
        "longitude": -81.804,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80400021492052,
          41.319486151187775
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 124,
        "SITE_NAME": "Snow Rd Picnic Area",
        "ACTION": "tree planting",
        "RES": "Big Creek",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.399704,
        "longitude": -81.760197,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.76019694069282,
          41.39970432383976
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 123,
        "SITE_NAME": "Fowles Marsh",
        "ACTION": "tree planting",
        "RES": "Big Creek",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.368098,
        "longitude": -81.830504,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83050352578954,
          41.368097543053786
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 122,
        "SITE_NAME": "Fowles Marsh",
        "ACTION": "tree planting",
        "RES": "Big Creek",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.365212,
        "longitude": -81.830923,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83092291884067,
          41.365212309703786
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 128,
        "SITE_NAME": "Snow Rd Picnic Area",
        "ACTION": "ash tree removal",
        "RES": "Big Creek",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.400028,
        "longitude": -81.760826,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.76082603026948,
          41.400027654525815
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 127,
        "SITE_NAME": "Snow Rd Picnic Area",
        "ACTION": "ash tree removal",
        "RES": "Big Creek",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.400028,
        "longitude": -81.760139,
        "marker-size": "small",
        "marker-color": "#825A42",
        "title": "Ash Tree Removal Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.76013869165794,
          41.40002765452583
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 126,
        "SITE_NAME": "Snow Rd Picnic Area",
        "ACTION": "tree planting",
        "RES": "Big Creek",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.399582,
        "longitude": -81.761106,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.76110562563692,
          41.39958198207961
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "ID": 125,
        "SITE_NAME": "Snow Rd Picnic Area",
        "ACTION": "tree planting",
        "RES": "Big Creek",
        "TYPE": "terrestrial",
        "COMMENT": null,
        "PURSUE'14?": null,
        "category": "forest",
        "latitude": 41.400325,
        "longitude": -81.76071,
        "marker-size": "small",
        "marker-color": "#53935B",
        "title": "Tree Planting Site"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.76070953219974,
          41.40032476779204
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
    var popupContent2 =  '<div class="popup_container">' + '<h3>' + feature.properties.SITE_NAME + '</h3>' + '<h4>' + 'Reservation:' + '</h4>' + '<p>' + feature.properties.RES + '</p>' + '<h4>' + 'Action to be Taken:' + '</h4>' + '<p>' + feature.properties.title + '</p>' + '<h4>' + 'Additional Info:' + '</h4>' + '<p>' + feature.properties.COMMENT + '</p>' + '</div>'


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

