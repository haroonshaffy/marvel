function initializeMap() {
    var myLatlng = { lat: 40.7128, lng: 74.0060 }; //Marvel HQ
    var map = new google.maps.Map(
        document.getElementById("map"),
        {
            zoom: 1,
            center: myLatlng,
        }
    );
}