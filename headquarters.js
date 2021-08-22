function initializeMap() {
    var myLatlng = { lat: 0, lng: 0 };
    var map = new google.maps.Map(
        document.getElementById("map"),
        {
            zoom: 1,
            center: myLatlng,
        }
    );
}