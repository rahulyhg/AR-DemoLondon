// var loaded = false;

// function locationChanged(lat, lon, alt, acc) {
//     if (!loaded) {
//         var marker_image = new AR.ImageResource("assets/toilet.png");
//         var marker_loc = new AR.GeoLocation(21.92 + 0.006, 82.779999 + 0.5, alt, acc);
//         var marker_drawable = new AR.ImageDrawable(marker_image, 4);
//         var marker_object = new AR.GeoObject(marker_loc, {
//             drawables: {
//                 cam: [marker_drawable]
//             }
//         })
//         AR.logger.debug("Added Marker" + "lat" + lat + "lon" + lon);
//     }
//     loaded = true;
// }
// AR.logger.activateDebugMode();
// AR.context.onLocationChanged = locationChanged;

// [{
//         "id": "1",
//         "longitude": "0.061",
//         "latitude": "-0.065",
//         "description": "This is the description of POI#1",
//         "name": "POI#1"
//     },
//     {
//         "id": "2",
//         "longitude": "-0.096",
//         "latitude": "0.089",
//         "description": "This is the description of POI#2",
//         "name": "POI#2"
//     },
//     {
//         "id": "3",
//         "longitude": "-0.013",
//         "latitude": "-0.05",
//         "description": "This is the description of POI#3",
//         "name": "POI#3"
//     },
//     {
//         "id": "4",
//         "longitude": "0.005",
//         "latitude": "-0.082",
//         "description": "This is the description of POI#4",
//         "name": "POI#4"
//     },
//     {
//         "id": "5",
//         "longitude": "0.078",
//         "latitude": "0.066",
//         "description": "This is the description of POI#5",
//         "name": "POI#5"
//     },
//     {
//         "id": "6",
//         "longitude": "-0.095",
//         "latitude": "0.053",
//         "description": "This is the description of POI#6",
//         "name": "POI#6"
//     },
//     {
//         "id": "7",
//         "longitude": "0.059",
//         "latitude": "-0.054",
//         "description": "This is the description of POI#7",
//         "name": "POI#7"
//     },
//     {
//         "id": "8",
//         "longitude": "-0.024",
//         "latitude": "0.098",
//         "description": "This is the description of POI#8",
//         "name": "POI#8"
//     },
//     {
//         "id": "9",
//         "longitude": "0.002",
//         "latitude": "0.029",
//         "description": "This is the description of POI#9",
//         "name": "POI#9"
//     },
//     {
//         "id": "10",
//         "longitude": "0.041",
//         "latitude": "-0.013",
//         "description": "This is the description of POI#10",
//         "name": "POI#10"
//     },
//     {
//         "id": "11",
//         "longitude": "-0.083",
//         "latitude": "-0.08",
//         "description": "This is the description of POI#11",
//         "name": "POI#11"
//     },
//     {
//         "id": "12",
//         "longitude": "-0.038",
//         "latitude": "0.075",
//         "description": "This is the description of POI#12",
//         "name": "POI#12"
//     },
//     {
//         "id": "13",
//         "longitude": "0.059",
//         "latitude": "-0.039",
//         "description": "This is the description of POI#13",
//         "name": "POI#13"
//     },
//     {
//         "id": "14",
//         "longitude": "0.006",
//         "latitude": "0.08",
//         "description": "This is the description of POI#14",
//         "name": "POI#14"
//     },
//     {
//         "id": "15",
//         "longitude": "-0.025",
//         "latitude": "0.068",
//         "description": "This is the description of POI#15",
//         "name": "POI#15"
//     },
//     {
//         "id": "16",
//         "longitude": "-0.098",
//         "latitude": "-0.001",
//         "description": "This is the description of POI#16",
//         "name": "POI#16"
//     },
//     {
//         "id": "17",
//         "longitude": "-0.012",
//         "latitude": "-0.065",
//         "description": "This is the description of POI#17",
//         "name": "POI#17"
//     },
//     {
//         "id": "18",
//         "longitude": "-0.014",
//         "latitude": "-0.093",
//         "description": "This is the description of POI#18",
//         "name": "POI#18"
//     },
//     {
//         "id": "19",
//         "longitude": "-0.075",
//         "latitude": "0.076",
//         "description": "This is the description of POI#19",
//         "name": "POI#19"
//     },
//     {
//         "id": "20",
//         "longitude": "0.041",
//         "latitude": "0.091",
//         "description": "This is the description of POI#20",
//         "name": "POI#20"
//     },
//     {
//         "id": "21",
//         "longitude": "0.043",
//         "latitude": "-0.097",
//         "description": "This is the description of POI#21",
//         "name": "POI#21"
//     },
//     {
//         "id": "22",
//         "longitude": "-0.051",
//         "latitude": "0.047",
//         "description": "This is the description of POI#22",
//         "name": "POI#22"
//     },
//     {
//         "id": "23",
//         "longitude": "0.045",
//         "latitude": "0.002",
//         "description": "This is the description of POI#23",
//         "name": "POI#23"
//     },
//     {
//         "id": "24",
//         "longitude": "-0.069",
//         "latitude": "0.026",
//         "description": "This is the description of POI#24",
//         "name": "POI#24"
//     },
//     {
//         "id": "25",
//         "longitude": "-0.088",
//         "latitude": "-0.054",
//         "description": "This is the description of POI#25",
//         "name": "POI#25"
//     },
//     {
//         "id": "26",
//         "longitude": "-0.033",
//         "latitude": "0.072",
//         "description": "This is the description of POI#26",
//         "name": "POI#26"
//     },
//     {
//         "id": "27",
//         "longitude": "0.047",
//         "latitude": "-0.07",
//         "description": "This is the description of POI#27",
//         "name": "POI#27"
//     },
//     {
//         "id": "28",
//         "longitude": "-0.008",
//         "latitude": "0.029",
//         "description": "This is the description of POI#28",
//         "name": "POI#28"
//     },
//     {
//         "id": "29",
//         "longitude": "0.009",
//         "latitude": "0.005",
//         "description": "This is the description of POI#29",
//         "name": "POI#29"
//     },
//     {
//         "id": "30",
//         "longitude": "-0.028",
//         "latitude": "0.098",
//         "description": "This is the description of POI#30",
//         "name": "POI#30"
//     }
// ]