let hospitalsCollection = {
    "type": "FeatureCollection",
    "name": "Hospitals",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "OBJECTID": 1, "NAME": "Juravinski Cancer Centre", "ADDRESS": "699 Concession Street", "COMMUNITY": "Hamilton", "TYPE": null }, "geometry": { "type": "Point", "coordinates": [-79.846590728010099, 43.240101591261798] } },
        { "type": "Feature", "properties": { "OBJECTID": 2, "NAME": "Chedoke Hospital", "ADDRESS": "565 Sanatorium Road", "COMMUNITY": "Hamilton", "TYPE": null }, "geometry": { "type": "Point", "coordinates": [-79.917105973058298, 43.238557762441999] } },
        { "type": "Feature", "properties": { "OBJECTID": 3, "NAME": "Hamilton General Hospital", "ADDRESS": "237 Barton Street East", "COMMUNITY": "Hamilton", "TYPE": null }, "geometry": { "type": "Point", "coordinates": [-79.854334932631602, 43.261943491554803] } },
        { "type": "Feature", "properties": { "OBJECTID": 4, "NAME": "Juravinski Hospital", "ADDRESS": "711 Concession Street", "COMMUNITY": "Hamilton", "TYPE": null }, "geometry": { "type": "Point", "coordinates": [-79.845001340293905, 43.240130576270303] } },
        { "type": "Feature", "properties": { "OBJECTID": 5, "NAME": "McMaster University Medical Centre", "ADDRESS": "1200 Main Street West", "COMMUNITY": "Hamilton", "TYPE": null }, "geometry": { "type": "Point", "coordinates": [-79.917632215667794, 43.259615488890802] } },
        { "type": "Feature", "properties": { "OBJECTID": 6, "NAME": "St. Joseph's Hospital - Charlton Campus", "ADDRESS": "50 Charlton Avenue East", "COMMUNITY": "Hamilton", "TYPE": null }, "geometry": { "type": "Point", "coordinates": [-79.870919129765497, 43.248601536858502] } },
        { "type": "Feature", "properties": { "OBJECTID": 7, "NAME": "St. Peter's Hospital", "ADDRESS": "88 Maplewood Avenue", "COMMUNITY": "Hamilton", "TYPE": "Chronic Care" }, "geometry": { "type": "Point", "coordinates": [-79.836870572394105, 43.2447575867902] } },
        { "type": "Feature", "properties": { "OBJECTID": 8, "NAME": "St. Joseph's Centre for Mountain Health Services - West 5th Campus", "ADDRESS": "100 West 5th Street", "COMMUNITY": "Hamilton", "TYPE": "Psychiatric" }, "geometry": { "type": "Point", "coordinates": [-79.883117861422306, 43.242337043666502] } },
        { "type": "Feature", "properties": { "OBJECTID": 9, "NAME": "St. Joseph's Hospital - Urgent Care at King Campus", "ADDRESS": "2757 King Street East", "COMMUNITY": "Hamilton", "TYPE": "Urgent Care" }, "geometry": { "type": "Point", "coordinates": [-79.7738480438165, 43.221722945082199] } }
    ]
}

//TODO: fix category and website
let hospitals = document.getElementById("hospitals");
hospitals.addEventListener("click", function () {

    clearMarkers();

    for (let i = 0; i < hospitalsCollection.features.length; i++) {
        console.log(hospitalsCollection.features[i].properties.NAME);
        new_marker = new google.maps.Marker({
            position: {
                lat: hospitalsCollection.features[i].geometry.coordinates[1],
                lng: hospitalsCollection.features[i].geometry.coordinates[0]
            },
            title: hospitalsCollection.features[i].properties.NAME,
        });


        new_marker.setMap(map);

        new_marker.NAME = hospitalsCollection.features[i].properties.NAME;
        //new_marker.CATEGORY = hospitalsCollection.features[i].properties.CATEGORY;
        //new_marker.WEBSITE = hospitalsCollection.features[i].properties.WEBSITE;

        new_marker.addListener("click", marker_clicked);

        markers.push(new_marker);
    }
});