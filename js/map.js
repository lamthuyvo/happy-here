
    
// This example adds a marker to indicate the position
// of Bondi Beach in Sydney, Australia
function initialize() {
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(40.7351,-74.0103295)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);

  var image = 'http://50.6.193.137/marker_blue_40.png';
  var myLatLng = new google.maps.LatLng(40.7351,-74.0103295);
  var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
