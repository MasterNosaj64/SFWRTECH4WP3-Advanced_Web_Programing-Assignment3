let markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById("map"),
        {
            center: { lat: 43.25282, lng: -79.831006 },
            zoom: 12
        });

    infowindow = new google.maps.InfoWindow();
}

function marker_clicked() {
    infowindow.close();
    infowindow.setContent(
        "<h3>" + this.NAME + "</h3>"
    );
    infowindow.open(map, this);
}