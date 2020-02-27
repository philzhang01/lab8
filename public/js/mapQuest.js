function initMap() {
  // add your code here
  L.mapquest.key = "VpjP97EkMP4liFuMwSYACVhxam9eC8AA";

  var map = L.mapquest.map("map", {
    center: [32.878974, -117.235934],
    layers: L.mapquest.tileLayer("map"),
    zoom: 12,
    zoomControl: false
  });

  L.marker([32.88, -117.236]).addTo(map);
}
