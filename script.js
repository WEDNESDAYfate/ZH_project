function initMap() {
    // Updated coordinates to match the provided location
    var location = {lat: 33.1747478, lng: -96.6428454};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

window.onload = initMap;
