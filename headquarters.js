function initializeMap() {
    var myLatlng = { lat: 0, lng: 0 };
    var map = new google.maps.Map(
        document.getElementById("map"),
        {
            zoom: 1,
            center: myLatlng,
        }
    );

    map.addListener("click", (e) => {
        var m = new google.maps.Marker({
            position: e.latLng,
            map,
        });
        map.setZoom(4);
        map.setCenter(m.getPosition());

    });
}