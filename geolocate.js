$('#geolocate').click(function () {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function (position) {
            clearMarkers();
            new_marker = new google.maps.Marker({
                position: { lat: position.coords.latitude, lng: position.coords.longitude },
                map: map,
                title: 'Current Location',
                icon: "http://maps.google.com/mapfiles/kml/paddle/ylw-blank.png"
            });

            new_marker.NAME = "Current Location";
            new_marker.CATEGORY = "Geolocation";

            var newCenter = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


            map.setCenter(newCenter);

            new_marker.addListener("click", marker_clicked);

            markers.push(new_marker);

        }, function (error) {

            document.getElementById("errorMessage").style.display = "block";

            setTimeout(function () {
                document.getElementById("errorMessage").style.display = "none";
            }, 5000);

        });

    } else {

        document.getElementById("errorMessage").style.display = "block";

        setTimeout(function () {
            document.getElementById("errorMessage").style.display = "none";
        }, 5000);

    }

});