$('#clear').click(function () {
    clearMarkers()
});

function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];

    var newCenter = new google.maps.LatLng(43.25282, -79.831006);

    map.setCenter(newCenter);
}