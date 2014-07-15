/*var geoJson = {
{
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
        "id": 1,
        "rank": "moderate",
        "uid": 1,
        "latitude": 41.501776,
        "longitude": -81.496445,
        "Picture Numbers": "2797-2799",
        "Bank": "L",
        "bank_ht": 3,
        "bank_leng": 30,
        "mat_scor": 0,
        "strat_score": 2,
        "root_val": 95,
        "root_score": 1.5,
        "dense_val": 50,
        "dense_score": 4.25,
        "bank_angle": 50,
        "angle_score": 3.5,
        "surf_val": 45,
        "surf_score": 4.5,
        "tot_score": 15.75,
        "rank_1": "moderate",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.496445,
          41.501776
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 2,
        "rank": "high",
        "uid": 2,
        "latitude": 41.50187,
        "longitude": -81.496474,
        "Picture Numbers": "2800-2805",
        "Bank": "R",
        "bank_ht": 1.5,
        "bank_leng": 40,
        "mat_scor": 1,
        "strat_score": 0,
        "root_val": 40,
        "root_score": 4.75,
        "dense_val": 45,
        "dense_score": 4.5,
        "bank_angle": 100,
        "angle_score": 8.5,
        "surf_val": 35,
        "surf_score": 5.5,
        "tot_score": 24.25,
        "rank_1": "high ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.496474,
          41.50187
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 3,
        "rank": "high",
        "uid": 3,
        "latitude": 41.502022,
        "longitude": -81.496692,
        "Picture Numbers": "2806-2809",
        "Bank": "L",
        "bank_ht": 2.5,
        "bank_leng": 30,
        "mat_scor": 0,
        "strat_score": 1,
        "root_val": 50,
        "root_score": 4,
        "dense_val": 15,
        "dense_score": 8,
        "bank_angle": 75,
        "angle_score": 5.5,
        "surf_val": 15,
        "surf_score": 8,
        "tot_score": 26.5,
        "rank_1": "high ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.496692,
          41.502022
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 4,
        "rank": "high",
        "uid": 4,
        "latitude": 41.502147,
        "longitude": -81.496713,
        "Picture Numbers": "2810-2812",
        "Bank": "R",
        "bank_ht": 2.5,
        "bank_leng": 30,
        "mat_scor": 1,
        "strat_score": 0,
        "root_val": 50,
        "root_score": 4,
        "dense_val": 25,
        "dense_score": 6,
        "bank_angle": 100,
        "angle_score": 8.5,
        "surf_val": 20,
        "surf_score": 7,
        "tot_score": 26.5,
        "rank_1": "high ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.496713,
          41.502147
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 5,
        "rank": "high",
        "uid": 5,
        "latitude": 41.502807,
        "longitude": -81.496954,
        "Picture Numbers": "2813-2815",
        "Bank": "L",
        "bank_ht": 8,
        "bank_leng": 55,
        "mat_scor": 0,
        "strat_score": 1,
        "root_val": 65,
        "root_score": 3.25,
        "dense_val": 15,
        "dense_score": 8,
        "bank_angle": 65,
        "angle_score": 4.5,
        "surf_val": 55,
        "surf_score": 4,
        "tot_score": 20.75,
        "rank_1": "moderate",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.496954,
          41.502807
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 6,
        "rank": "moderate",
        "uid": 6,
        "latitude": 41.502805,
        "longitude": -81.496894,
        "Picture Numbers": "2816-1818",
        "Bank": "R",
        "bank_ht": 6.5,
        "bank_leng": 55,
        "mat_scor": 0,
        "strat_score": 1,
        "root_val": 55,
        "root_score": 3.75,
        "dense_val": 15,
        "dense_score": 8,
        "bank_angle": 50,
        "angle_score": 4,
        "surf_val": 60,
        "surf_score": 3.5,
        "tot_score": 20.25,
        "rank_1": "moderate",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.496894,
          41.502805
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 7,
        "rank": "moderate",
        "uid": 7,
        "latitude": 41.502959,
        "longitude": -81.496932,
        "Picture Numbers": "2819-2820",
        "Bank": "R",
        "bank_ht": 5,
        "bank_leng": 40,
        "mat_scor": 0,
        "strat_score": 2,
        "root_val": 60,
        "root_score": 3.5,
        "dense_val": 15,
        "dense_score": 8,
        "bank_angle": 40,
        "angle_score": 3,
        "surf_val": 30,
        "surf_score": 6,
        "tot_score": 22.5,
        "rank_1": "moderate",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.496932,
          41.502959
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 8,
        "rank": "moderate",
        "uid": 8,
        "latitude": 41.503009,
        "longitude": -81.49699,
        "Picture Numbers": "2821-2925",
        "Bank": "L",
        "bank_ht": 6,
        "bank_leng": 55,
        "mat_scor": 0,
        "strat_score": 1,
        "root_val": 75,
        "root_score": 2.75,
        "dense_val": 15,
        "dense_score": 8,
        "bank_angle": 75,
        "angle_score": 5.5,
        "surf_val": 35,
        "surf_score": 5.5,
        "tot_score": 22.75,
        "rank_1": "moderate ",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.49699,
          41.503009
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 9,
        "rank": "high",
        "uid": 9,
        "latitude": 41.503174,
        "longitude": -81.496935,
        "Picture Numbers": "2826-2829",
        "Bank": "R",
        "bank_ht": 5,
        "bank_leng": 40,
        "mat_scor": 0,
        "strat_score": 4,
        "root_val": 90,
        "root_score": 2,
        "dense_val": 35,
        "dense_score": 5.5,
        "bank_angle": 70,
        "angle_score": 5,
        "surf_val": 15,
        "surf_score": 8,
        "tot_score": 24.5,
        "rank_1": "high ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.496935,
          41.503174
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 10,
        "rank": "moderate",
        "uid": 10,
        "latitude": 41.503229,
        "longitude": -81.496997,
        "Picture Numbers": "2831-2830",
        "Bank": "L",
        "bank_ht": 5,
        "bank_leng": 60,
        "mat_scor": 0,
        "strat_score": 4,
        "root_val": 90,
        "root_score": 2,
        "dense_val": 35,
        "dense_score": 5.5,
        "bank_angle": 75,
        "angle_score": 5.5,
        "surf_val": 25,
        "surf_score": 6.5,
        "tot_score": 23.5,
        "rank_1": "moderate ",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.496997,
          41.503229
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 11,
        "rank": "high",
        "uid": 11,
        "latitude": 41.503357,
        "longitude": -81.497035,
        "Picture Numbers": "2832-2834",
        "Bank": "R",
        "bank_ht": 3,
        "bank_leng": 95,
        "mat_scor": 0,
        "strat_score": 0,
        "root_val": 50,
        "root_score": 4,
        "dense_val": 40,
        "dense_score": 4.25,
        "bank_angle": 80,
        "angle_score": 8,
        "surf_val": 15,
        "surf_score": 8,
        "tot_score": 24.25,
        "rank_1": "high ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.497035,
          41.503357
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 12,
        "rank": "moderate",
        "uid": 12,
        "latitude": 41.503378,
        "longitude": -81.497128,
        "Picture Numbers": "2835-2836",
        "Bank": "L",
        "bank_ht": 4,
        "bank_leng": 55,
        "mat_scor": 0,
        "strat_score": 3,
        "root_val": 90,
        "root_score": 2,
        "dense_val": 40,
        "dense_score": 5,
        "bank_angle": 30,
        "angle_score": 2.5,
        "surf_val": 30,
        "surf_score": 7,
        "tot_score": 19.5,
        "rank_1": "moderate",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.497128,
          41.503378
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 1,
        "rank": "moderate",
        "uid": 13,
        "latitude": 41.50454,
        "longitude": -81.491997,
        "Picture Numbers": "2837-2839",
        "Bank": "L",
        "bank_ht": 3,
        "bank_leng": 40,
        "mat_scor": 0,
        "strat_score": 2,
        "root_val": 65,
        "root_score": 3.25,
        "dense_val": 40,
        "dense_score": 5,
        "bank_angle": 75,
        "angle_score": 5.5,
        "surf_val": 15,
        "surf_score": 8,
        "tot_score": 23.75,
        "rank_1": "moderate/ high",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.491997,
          41.50454
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 2,
        "rank": "high",
        "uid": 14,
        "latitude": 41.504586,
        "longitude": -81.491982,
        "Picture Numbers": "2840-2841",
        "Bank": "R",
        "bank_ht": 4,
        "bank_leng": 40,
        "mat_scor": 0,
        "strat_score": 2,
        "root_val": 60,
        "root_score": 3.5,
        "dense_val": 25,
        "dense_score": 6,
        "bank_angle": 80,
        "angle_score": 6,
        "surf_val": 10,
        "surf_score": 9,
        "tot_score": 26.5,
        "rank_1": "high ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.491982,
          41.504586
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 3,
        "rank": "moderate",
        "uid": 15,
        "latitude": 41.504605,
        "longitude": -81.492213,
        "Picture Numbers": "2846-2848",
        "Bank": "R",
        "bank_ht": 4,
        "bank_leng": 45,
        "mat_scor": 0,
        "strat_score": 0,
        "root_val": 80,
        "root_score": 2.5,
        "dense_val": 20,
        "dense_score": 7,
        "bank_angle": 70,
        "angle_score": 5,
        "surf_val": 25,
        "surf_score": 6.5,
        "tot_score": 21,
        "rank_1": "moderate",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.492213,
          41.504605
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 4,
        "rank": "high",
        "uid": 16,
        "latitude": 41.50458,
        "longitude": -81.492265,
        "Picture Numbers": "2849-2851",
        "Bank": "L",
        "bank_ht": 4,
        "bank_leng": 35,
        "mat_scor": 0,
        "strat_score": 0,
        "root_val": 45,
        "root_score": 4.25,
        "dense_val": 20,
        "dense_score": 7,
        "bank_angle": 90,
        "angle_score": 8,
        "surf_val": 10,
        "surf_score": 9,
        "tot_score": 28.25,
        "rank_1": "high ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.492265,
          41.50458
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 5,
        "rank": "high",
        "uid": 17,
        "latitude": 41.504669,
        "longitude": -81.492431,
        "Picture Numbers": "2852-2853",
        "Bank": "R",
        "bank_ht": 6,
        "bank_leng": 45,
        "mat_scor": 0,
        "strat_score": 1,
        "root_val": 15,
        "root_score": 7.75,
        "dense_val": 10,
        "dense_score": 8.5,
        "bank_angle": 80,
        "angle_score": 6,
        "surf_val": 20,
        "surf_score": 7,
        "tot_score": 30.25,
        "rank_1": "high ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.492431,
          41.504669
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 6,
        "rank": "high",
        "uid": 18,
        "latitude": 41.504628,
        "longitude": -81.492471,
        "Picture Numbers": "2854-2855",
        "Bank": "L",
        "bank_ht": 5,
        "bank_leng": 45,
        "mat_scor": 0,
        "strat_score": 1,
        "root_val": 85,
        "root_score": 2.25,
        "dense_val": 40,
        "dense_score": 5,
        "bank_angle": 50,
        "angle_score": 3.5,
        "surf_val": 25,
        "surf_score": 6.5,
        "tot_score": 18.25,
        "rank_1": "moderate",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.492471,
          41.504628
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 7,
        "rank": "very high",
        "uid": 19,
        "latitude": 41.504609,
        "longitude": -81.492682,
        "Picture Numbers": "2856-2858",
        "Bank": "L",
        "bank_ht": 6,
        "bank_leng": 80,
        "mat_scor": 0,
        "strat_score": 0,
        "root_val": 20,
        "root_score": 7,
        "dense_val": 10,
        "dense_score": 8.5,
        "bank_angle": 100,
        "angle_score": 8.5,
        "surf_val": 15,
        "surf_score": 8,
        "tot_score": 32,
        "rank_1": "very high ",
        "marker-color": "#FF0000",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.492682,
          41.504609
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 8,
        "rank": "high",
        "uid": 20,
        "latitude": 41.50464,
        "longitude": -81.492578,
        "Picture Numbers": "2860-2861",
        "Bank": "R",
        "bank_ht": 3,
        "bank_leng": 20,
        "mat_scor": 0,
        "strat_score": 1,
        "root_val": 15,
        "root_score": 7.75,
        "dense_val": 5,
        "dense_score": 9,
        "bank_angle": 50,
        "angle_score": 3.5,
        "surf_val": 20,
        "surf_score": 7,
        "tot_score": 28.25,
        "rank_1": "high ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.492578,
          41.50464
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 9,
        "rank": "very high",
        "uid": 21,
        "latitude": 41.50465,
        "longitude": -81.492724,
        "Picture Numbers": "2862-2864",
        "Bank": "R",
        "bank_ht": 9,
        "bank_leng": 38,
        "mat_scor": 0,
        "strat_score": 2,
        "root_val": 20,
        "root_score": 7,
        "dense_val": 20,
        "dense_score": 7,
        "bank_angle": 85,
        "angle_score": 7,
        "surf_val": 5,
        "surf_score": 9.5,
        "tot_score": 32.5,
        "rank_1": "very high ",
        "marker-color": "#FF0000",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.492724,
          41.50465
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 10,
        "rank": "high",
        "uid": 22,
        "latitude": 41.504548,
        "longitude": -81.492951,
        "Picture Numbers": "2865-2866",
        "Bank": "L",
        "bank_ht": 7,
        "bank_leng": 45,
        "mat_scor": 0,
        "strat_score": 2,
        "root_val": 55,
        "root_score": 3.75,
        "dense_val": 20,
        "dense_score": 7,
        "bank_angle": 75,
        "angle_score": 5.5,
        "surf_val": 20,
        "surf_score": 7,
        "tot_score": 25.25,
        "rank_1": "high ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.492951,
          41.504548
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 11,
        "rank": "moderate",
        "uid": 23,
        "latitude": 41.504623,
        "longitude": -81.492903,
        "Picture Numbers": "2867-2868",
        "Bank": "R",
        "bank_ht": 7,
        "bank_leng": 55,
        "mat_scor": 0,
        "strat_score": 2,
        "root_val": 80,
        "root_score": 2.5,
        "dense_val": 40,
        "dense_score": 5,
        "bank_angle": 80,
        "angle_score": 6,
        "surf_val": 25,
        "surf_score": 6.5,
        "tot_score": 22,
        "rank_1": "moderate ",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.492903,
          41.504623
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 12,
        "rank": "moderate",
        "uid": 24,
        "latitude": 41.504608,
        "longitude": -81.493004,
        "Picture Numbers": "2869-2870",
        "Bank": "R",
        "bank_ht": 7,
        "bank_leng": 40,
        "mat_scor": 0,
        "strat_score": 2,
        "root_val": 70,
        "root_score": 3,
        "dense_val": 30,
        "dense_score": 5.75,
        "bank_angle": 40,
        "angle_score": 3,
        "surf_val": 30,
        "surf_score": 6,
        "tot_score": 19.75,
        "rank_1": "moderate",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.493004,
          41.504608
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 1,
        "rank": "moderate",
        "uid": 25,
        "latitude": 41.502488,
        "longitude": -81.491489,
        "Picture Numbers": "2871-2872",
        "Bank": "L",
        "bank_ht": 5,
        "bank_leng": 80,
        "mat_scor": 0,
        "strat_score": 0,
        "root_val": 20,
        "root_score": 3,
        "dense_val": 30,
        "dense_score": 5.75,
        "bank_angle": 65,
        "angle_score": 4.5,
        "surf_val": 30,
        "surf_score": 6,
        "tot_score": 19.25,
        "rank_1": "moderate",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.491489,
          41.502488
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 2,
        "rank": "moderate",
        "uid": 26,
        "latitude": 41.502927,
        "longitude": -81.491201,
        "Picture Numbers": "2873-2874",
        "Bank": "R",
        "bank_ht": 7,
        "bank_leng": 120,
        "mat_scor": 0,
        "strat_score": 0,
        "root_val": 90,
        "root_score": 2,
        "dense_val": 40,
        "dense_score": 5,
        "bank_angle": 80,
        "angle_score": 6,
        "surf_val": 65,
        "surf_score": 3.25,
        "tot_score": 16.25,
        "rank_1": "moderate",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.491201,
          41.502927
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 3,
        "rank": "moderate",
        "uid": 27,
        "latitude": 41.502867,
        "longitude": -81.491299,
        "Picture Numbers": "2875-2876",
        "Bank": "L",
        "bank_ht": 5,
        "bank_leng": 45,
        "mat_scor": 0,
        "strat_score": 0,
        "root_val": 85,
        "root_score": 2.25,
        "dense_val": 20,
        "dense_score": 7,
        "bank_angle": 20,
        "angle_score": 5,
        "surf_val": 65,
        "surf_score": 3.25,
        "tot_score": 17.5,
        "rank_1": "moderate",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.491299,
          41.502867
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 4,
        "rank": "moderate",
        "uid": 28,
        "latitude": 41.50303,
        "longitude": -81.491202,
        "Picture Numbers": "2877-2879",
        "Bank": "R",
        "bank_ht": 25,
        "bank_leng": 100,
        "mat_scor": 0,
        "strat_score": 0,
        "root_val": 80,
        "root_score": 2.5,
        "dense_val": 15,
        "dense_score": 8,
        "bank_angle": 65,
        "angle_score": 4.5,
        "surf_val": 40,
        "surf_score": 5,
        "tot_score": 20,
        "rank_1": "Moderate",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.491202,
          41.50303
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 5,
        "rank": "high",
        "uid": 29,
        "latitude": 41.503288,
        "longitude": -81.491374,
        "Picture Numbers": "2880-2882",
        "Bank": "R",
        "bank_ht": 6,
        "bank_leng": 75,
        "mat_scor": 0,
        "strat_score": 0,
        "root_val": 40,
        "root_score": 4.25,
        "dense_val": 15,
        "dense_score": 8,
        "bank_angle": 80,
        "angle_score": 6,
        "surf_val": 10,
        "surf_score": 9,
        "tot_score": 27.25,
        "rank_1": "high ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.491374,
          41.503288
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 6,
        "rank": "high",
        "uid": 30,
        "latitude": 41.503425,
        "longitude": -81.49152,
        "Picture Numbers": "2883-2884",
        "Bank": "R",
        "bank_ht": 4,
        "bank_leng": 65,
        "mat_scor": 2,
        "strat_score": 1,
        "root_val": 65,
        "root_score": 3.25,
        "dense_val": 15,
        "dense_score": 8,
        "bank_angle": 65,
        "angle_score": 4.5,
        "surf_val": 25,
        "surf_score": 6.5,
        "tot_score": 25.25,
        "rank_1": "high ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.49152,
          41.503425
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 7,
        "rank": "high",
        "uid": 31,
        "latitude": 41.503526,
        "longitude": -81.491557,
        "Picture Numbers": "2885-2886",
        "Bank": "R",
        "bank_ht": 18,
        "bank_leng": 15,
        "mat_scor": 0,
        "strat_score": 0,
        "root_val": 60,
        "root_score": 3.5,
        "dense_val": 10,
        "dense_score": 8.5,
        "bank_angle": 70,
        "angle_score": 5,
        "surf_val": 10,
        "surf_score": 9,
        "tot_score": 26,
        "rank_1": "high ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.491557,
          41.503526
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 8,
        "rank": "moderate",
        "uid": 32,
        "latitude": 41.503589,
        "longitude": -81.491717,
        "Picture Numbers": "2887-2888",
        "Bank": "R",
        "bank_ht": 6,
        "bank_leng": 60,
        "mat_scor": 0,
        "strat_score": 0,
        "root_val": 80,
        "root_score": 2.5,
        "dense_val": 20,
        "dense_score": 7,
        "bank_angle": 65,
        "angle_score": 4.5,
        "surf_val": 25,
        "surf_score": 6.5,
        "tot_score": 20.5,
        "rank_1": "moderate",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.491717,
          41.503589
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 9,
        "rank": "moderate",
        "uid": 33,
        "latitude": 41.503669,
        "longitude": -81.491898,
        "Picture Numbers": "2889-2890",
        "Bank": "R",
        "bank_ht": 15,
        "bank_leng": 100,
        "mat_scor": 0,
        "strat_score": 0,
        "root_val": 90,
        "root_score": 2,
        "dense_val": 20,
        "dense_score": 7,
        "bank_angle": 80,
        "angle_score": 6,
        "surf_val": 30,
        "surf_score": 6,
        "tot_score": 21,
        "rank_1": "moderate ",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.491898,
          41.503669
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 10,
        "rank": "high",
        "uid": 34,
        "latitude": 41.503622,
        "longitude": -81.492176,
        "Picture Numbers": "2891-2892",
        "Bank": "R",
        "bank_ht": 5,
        "bank_leng": 50,
        "mat_scor": 0,
        "strat_score": 0,
        "root_val": 60,
        "root_score": 3.5,
        "dense_val": 10,
        "dense_score": 8.5,
        "bank_angle": 95,
        "angle_score": 8.25,
        "surf_val": 10,
        "surf_score": 9,
        "tot_score": 29.25,
        "rank_1": "High ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.492176,
          41.503622
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 11,
        "rank": "high",
        "uid": 35,
        "latitude": 41.503438,
        "longitude": -81.492428,
        "Picture Numbers": "2893-2894",
        "Bank": "L",
        "bank_ht": 5,
        "bank_leng": 150,
        "mat_scor": 0,
        "strat_score": 0,
        "root_val": 60,
        "root_score": 3.5,
        "dense_val": 10,
        "dense_score": 8.5,
        "bank_angle": 90,
        "angle_score": 8,
        "surf_val": 20,
        "surf_score": 7,
        "tot_score": 27,
        "rank_1": "High ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.492428,
          41.503438
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 12,
        "rank": "high",
        "uid": 36,
        "latitude": 41.503544,
        "longitude": -81.492364,
        "Picture Numbers": "2895-2896",
        "Bank": "R",
        "bank_ht": 5,
        "bank_leng": 40,
        "mat_scor": 0,
        "strat_score": 1,
        "root_val": 75,
        "root_score": 2.75,
        "dense_val": 10,
        "dense_score": 8.5,
        "bank_angle": 80,
        "angle_score": 6,
        "surf_val": 15,
        "surf_score": 8,
        "tot_score": 26.25,
        "rank_1": "High ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.492364,
          41.503544
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 13,
        "rank": "high",
        "uid": 37,
        "latitude": 41.503496,
        "longitude": -81.492806,
        "Picture Numbers": "2897-2898",
        "Bank": "R",
        "bank_ht": 2.5,
        "bank_leng": 80,
        "mat_scor": 0,
        "strat_score": 0,
        "root_val": 40,
        "root_score": 4.75,
        "dense_val": 10,
        "dense_score": 8.5,
        "bank_angle": 95,
        "angle_score": 8.25,
        "surf_val": 5,
        "surf_score": 9.5,
        "tot_score": 31,
        "rank_1": "High ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.492806,
          41.503496
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 14,
        "rank": "high",
        "uid": 38,
        "latitude": 41.503485,
        "longitude": -81.492893,
        "Picture Numbers": "2899-2900",
        "Bank": "L",
        "bank_ht": 5,
        "bank_leng": 100,
        "mat_scor": 2,
        "strat_score": 1,
        "root_val": 30,
        "root_score": 6,
        "dense_val": 10,
        "dense_score": 8.5,
        "bank_angle": 100,
        "angle_score": 8.5,
        "surf_val": 40,
        "surf_score": 5,
        "tot_score": 31,
        "rank_1": "High ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.492893,
          41.503485
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 15,
        "rank": "high",
        "uid": 39,
        "latitude": 41.503718,
        "longitude": -81.493375,
        "Picture Numbers": "2901-2902",
        "Bank": "R",
        "bank_ht": 7,
        "bank_leng": 70,
        "mat_scor": 2,
        "strat_score": 1,
        "root_val": 60,
        "root_score": 3.5,
        "dense_val": 15,
        "dense_score": 8,
        "bank_angle": 85,
        "angle_score": 7,
        "surf_val": 45,
        "surf_score": 4.5,
        "tot_score": 26,
        "rank_1": "high ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.493375,
          41.503718
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 16,
        "rank": "moderate",
        "uid": 40,
        "latitude": 41.503776,
        "longitude": -81.493507,
        "Picture Numbers": "537-538",
        "Bank": "L",
        "bank_ht": 7,
        "bank_leng": 90,
        "mat_scor": 0,
        "strat_score": 2,
        "root_val": 50,
        "root_score": 4,
        "dense_val": 40,
        "dense_score": 5,
        "bank_angle": 105,
        "angle_score": 8.75,
        "surf_val": 60,
        "surf_score": 3.5,
        "tot_score": 23.25,
        "rank_1": "Moderate",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.493507,
          41.503776
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 17,
        "rank": "moderate",
        "uid": 41,
        "latitude": 41.503975,
        "longitude": -81.493617,
        "Picture Numbers": "539-540",
        "Bank": "L",
        "bank_ht": 5,
        "bank_leng": 40,
        "mat_scor": 0,
        "strat_score": 2,
        "root_val": 60,
        "root_score": 3.5,
        "dense_val": 35,
        "dense_score": 5.5,
        "bank_angle": 30,
        "angle_score": 3.5,
        "surf_val": 50,
        "surf_score": 4.25,
        "tot_score": 18.75,
        "rank_1": "moderate ",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.493617,
          41.503975
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 18,
        "rank": "high",
        "uid": 42,
        "latitude": 41.504219,
        "longitude": -81.493517,
        "Picture Numbers": "541-542",
        "Bank": "L",
        "bank_ht": 7,
        "bank_leng": 60,
        "mat_scor": 0,
        "strat_score": 1,
        "root_val": 25,
        "root_score": 6.5,
        "dense_val": 10,
        "dense_score": 8.5,
        "bank_angle": 90,
        "angle_score": 8,
        "surf_val": 60,
        "surf_score": 3.5,
        "tot_score": 27.5,
        "rank_1": "High ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.493517,
          41.504219
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 19,
        "rank": "moderate",
        "uid": 43,
        "latitude": 41.504058,
        "longitude": -81.493581,
        "Picture Numbers": "543-544",
        "Bank": "R",
        "bank_ht": 4,
        "bank_leng": 40,
        "mat_scor": 0,
        "strat_score": 1,
        "root_val": 65,
        "root_score": 3.25,
        "dense_val": 35,
        "dense_score": 5.5,
        "bank_angle": 75,
        "angle_score": 5.5,
        "surf_val": 65,
        "surf_score": 3.25,
        "tot_score": 18.5,
        "rank_1": "Moderate",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.493581,
          41.504058
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 20,
        "rank": "high",
        "uid": 44,
        "latitude": 41.504391,
        "longitude": -81.493112,
        "Picture Numbers": "545-546",
        "Bank": "R",
        "bank_ht": 10,
        "bank_leng": 80,
        "mat_scor": 0,
        "strat_score": 3,
        "root_val": 30,
        "root_score": 6,
        "dense_val": 15,
        "dense_score": 8,
        "bank_angle": 85,
        "angle_score": 7,
        "surf_val": 55,
        "surf_score": 4.25,
        "tot_score": 28.25,
        "rank_1": "High ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.493112,
          41.504391
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 21,
        "rank": "moderate",
        "uid": 45,
        "latitude": 41.504355,
        "longitude": -81.493188,
        "Picture Numbers": "547-548",
        "Bank": "L",
        "bank_ht": 7,
        "bank_leng": 70,
        "mat_scor": 0,
        "strat_score": 1,
        "root_val": 45,
        "root_score": 4.25,
        "dense_val": 15,
        "dense_score": 8,
        "bank_angle": 35,
        "angle_score": 2.75,
        "surf_val": 45,
        "surf_score": 4.5,
        "tot_score": 20.5,
        "rank_1": "moderate ",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.493188,
          41.504355
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 22,
        "rank": "high",
        "uid": 46,
        "latitude": 41.504617,
        "longitude": -81.493252,
        "Picture Numbers": "549-550",
        "Bank": "R",
        "bank_ht": 7,
        "bank_leng": 70,
        "mat_scor": 0,
        "strat_score": 1,
        "root_val": 20,
        "root_score": 7,
        "dense_val": 10,
        "dense_score": 8.5,
        "bank_angle": 105,
        "angle_score": 8.75,
        "surf_val": 60,
        "surf_score": 3.5,
        "tot_score": 28.75,
        "rank_1": "High ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.493252,
          41.504617
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 23,
        "rank": "moderate",
        "uid": 47,
        "latitude": 41.504582,
        "longitude": -81.493343,
        "Picture Numbers": "551-552",
        "Bank": "L",
        "bank_ht": 5,
        "bank_leng": 35,
        "mat_scor": 0,
        "strat_score": 1,
        "root_val": 60,
        "root_score": 3.5,
        "dense_val": 25,
        "dense_score": 6,
        "bank_angle": 40,
        "angle_score": 3,
        "surf_val": 50,
        "surf_score": 4.25,
        "tot_score": 17.75,
        "rank_1": "moderate",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.493343,
          41.504582
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 24,
        "rank": "high",
        "uid": 48,
        "latitude": 41.504598,
        "longitude": -81.493701,
        "Picture Numbers": "553-554",
        "Bank": "L",
        "bank_ht": 9,
        "bank_leng": 100,
        "mat_scor": 0,
        "strat_score": 1,
        "root_val": 20,
        "root_score": 7,
        "dense_val": 10,
        "dense_score": 8.5,
        "bank_angle": 115,
        "angle_score": 9.75,
        "surf_val": 60,
        "surf_score": 3.5,
        "tot_score": 29.75,
        "rank_1": "high ",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.493701,
          41.504598
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 25,
        "rank": "high",
        "uid": 49,
        "latitude": 41.504942,
        "longitude": -81.493749,
        "Picture Numbers": "556-557",
        "Bank": "R",
        "bank_ht": 6,
        "bank_leng": 85,
        "mat_scor": 0,
        "strat_score": 1,
        "root_val": 25,
        "root_score": 6.5,
        "dense_val": 15,
        "dense_score": 8,
        "bank_angle": 90,
        "angle_score": 8,
        "surf_val": 65,
        "surf_score": 3.25,
        "tot_score": 26.75,
        "rank_1": "high",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.493749,
          41.504942
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 26,
        "rank": "high",
        "uid": 50,
        "latitude": 41.5051,
        "longitude": -81.493972,
        "Picture Numbers": "561-562",
        "Bank": "L",
        "bank_ht": 6,
        "bank_leng": 45,
        "mat_scor": 0,
        "strat_score": 1,
        "root_val": 20,
        "root_score": 7,
        "dense_val": 10,
        "dense_score": 8.5,
        "bank_angle": 100,
        "angle_score": 8.5,
        "surf_val": 60,
        "surf_score": 3.5,
        "tot_score": 28.5,
        "rank_1": "high",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.493972,
          41.5051
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 27,
        "rank": "moderate",
        "uid": 51,
        "latitude": 41.505298,
        "longitude": -81.494262,
        "Picture Numbers": "564-565",
        "Bank": "R",
        "bank_ht": 20,
        "bank_leng": 150,
        "mat_scor": 0,
        "strat_score": 2,
        "root_val": 55,
        "root_score": 3.75,
        "dense_val": 25,
        "dense_score": 6,
        "bank_angle": 85,
        "angle_score": 7,
        "surf_val": 50,
        "surf_score": 4.25,
        "tot_score": 23,
        "rank_1": "moderate",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.494262,
          41.505298
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 28,
        "rank": "moderate",
        "uid": 52,
        "latitude": 41.505065,
        "longitude": -81.494733,
        "Picture Numbers": "566-567",
        "Bank": "L",
        "bank_ht": 7,
        "bank_leng": 50,
        "mat_scor": 0,
        "strat_score": 1,
        "root_val": 60,
        "root_score": 3.5,
        "dense_val": 45,
        "dense_score": 4.5,
        "bank_angle": 95,
        "angle_score": 8.25,
        "surf_val": 45,
        "surf_score": 4.5,
        "tot_score": 21.75,
        "rank_1": "moderate",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.494733,
          41.505065
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 29,
        "rank": "moderate",
        "uid": 53,
        "latitude": 41.505189,
        "longitude": -81.495242,
        "Picture Numbers": "568-569",
        "Bank": "R",
        "bank_ht": 20,
        "bank_leng": 65,
        "mat_scor": 0,
        "strat_score": 1,
        "root_val": 90,
        "root_score": 2,
        "dense_val": 40,
        "dense_score": 5,
        "bank_angle": 65,
        "angle_score": 4.5,
        "surf_val": 40,
        "surf_score": 5,
        "tot_score": 17.5,
        "rank_1": "moderate",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.495242,
          41.505189
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 30,
        "rank": "high",
        "uid": 54,
        "latitude": 41.505101,
        "longitude": -81.495793,
        "Picture Numbers": "571-572",
        "Bank": "R",
        "bank_ht": 15,
        "bank_leng": 40,
        "mat_scor": 0,
        "strat_score": 5,
        "root_val": 40,
        "root_score": 4.75,
        "dense_val": 25,
        "dense_score": 6,
        "bank_angle": 85,
        "angle_score": 7,
        "surf_val": 25,
        "surf_score": 6.5,
        "tot_score": 29.25,
        "rank_1": "high",
        "marker-color": "#FAAD12",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.495793,
          41.505101
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 31,
        "rank": "moderate",
        "uid": 55,
        "latitude": 41.504929,
        "longitude": -81.495934,
        "Picture Numbers": "573-574",
        "Bank": "L",
        "bank_ht": 5,
        "bank_leng": 35,
        "mat_scor": 0,
        "strat_score": 0,
        "root_val": 95,
        "root_score": 1.5,
        "dense_val": 60,
        "dense_score": 3.5,
        "bank_angle": 90,
        "angle_score": 8,
        "surf_val": 20,
        "surf_score": 7,
        "tot_score": 20,
        "rank_1": "moderate",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.495934,
          41.504929
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 32,
        "rank": "moderate",
        "uid": 56,
        "latitude": 41.504872,
        "longitude": -81.496178,
        "Picture Numbers": "575-576",
        "Bank": "R",
        "bank_ht": 3,
        "bank_leng": 130,
        "mat_scor": 0,
        "strat_score": 1,
        "root_val": 80,
        "root_score": 2.5,
        "dense_val": 20,
        "dense_score": 7,
        "bank_angle": 95,
        "angle_score": 8.25,
        "surf_val": 50,
        "surf_score": 4.25,
        "tot_score": 23,
        "rank_1": "moderate",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.496178,
          41.504872
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": 33,
        "rank": "moderate",
        "uid": 57,
        "latitude": 41.504688,
        "longitude": -81.496643,
        "Picture Numbers": "579-580",
        "Bank": "L",
        "bank_ht": 4,
        "bank_leng": 90,
        "mat_scor": 0,
        "strat_score": 1,
        "root_val": 60,
        "root_score": 3.5,
        "dense_val": 30,
        "dense_score": 5.75,
        "bank_angle": 110,
        "angle_score": 9,
        "surf_val": 65,
        "surf_score": 3.25,
        "tot_score": 22.5,
        "rank_1": "moderate",
        "marker-color": "#FFFF00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.496643,
          41.504688
        ]
      }
    }
  ]
};



		// Add custom popup html to each marker
		var markers = map2.markerLayer.on('layeradd', function(e) {
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

		map.markerLayer.setGeoJSON(geoJson)


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
		}*/




// Add layers to turn on/off
// Cleveland Metroparks trails app base layer
var parks = L.tileLayer('http://maps1.clemetparks.com/tilestache/tilestache.cgi/basemap/{z}/{x}/{y}.jpg', {
    attribution: 'Map data <a href="http://clevelandmetroparks.com" target="_blank">Cleveland Metroparks</a>, Imagery <a href="http://maps.clevelandmetroparks.com" target="_blank">Cleveland Metroparks</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	minZoom: 10,
    maxZoom: 18
}).addTo(map2);


// Mapbox satellite base layer
var imagery = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.map-7cfqm6fy/{z}/{x}/{y}.jpg', {
    attribution: 'Map data <a href="http://clevelandmetroparks.com" target="_blank">Cleveland Metroparks</a>, Imagery &copy <a href="http://mapbox.com" target="_blank">MapBox</a>',
	minZoom: 10,	
    maxZoom: 18
});

// BEHI line data hosted as a mapbox layer created in TileMill
var behi = L.tileLayer('http://a.tiles.mapbox.com/v3/cminvasiveplants.ujt3mcxr/{z}/{x}/{y}.jpg', {
	minZoom: 10,	
    maxZoom: 18
}).addTo(map2);


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
	"BEHI Data Points":markers,
};

// Adds layer controller
L.control.layers(baseMaps, overlayMaps).addTo(map2);

// Zoom to lat/long on link click
document.getElementById('navigation2').onclick = function(e) {
    var pos = e.target.getAttribute('data-position');
    if (pos) {
        var loc = pos.split(',');
        map2.setView(loc, 16);
    }
}


// Sets the starting lat/long and zoom of the map on first page load
map2.setView([41.3902, -81.6682], 11);


