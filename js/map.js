
    
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


// Finding you 

function success(position) {
  var s = document.querySelector('#status');
  
  if (s.className == 'success') {
    // not sure why we're hitting this twice in FF, I think it's to do with a cached result coming back    
    return;
  }
  
  s.innerHTML = "found you!";
  s.className = 'success';
  
  var mapcanvas = document.createElement('div');
  mapcanvas.id = 'mapcanvas';
  mapcanvas.style.height = '250px';
  mapcanvas.style.width = '100%';
    
  document.querySelector('article').appendChild(mapcanvas);
  
  var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var myOptions = {
    zoom: 15,
    center: latlng,
    mapTypeControl: false,
    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);
  
  var marker = new google.maps.Marker({
      position: latlng, 
      map: map, 
      title:"You are here! (at least within a "+position.coords.accuracy+" meter radius)"
  });

  // These two lines pass the latlng with parentheses and comma into the URL
  // var siteUrl= document.URL;
  // location.href = siteUrl+latlng;
}

function error(msg) {
  var s = document.querySelector('#status');
  s.innerHTML = typeof msg == 'string' ? msg : "failed";
  s.className = 'fail';
  
  // console.log(arguments);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  error('not supported');
}