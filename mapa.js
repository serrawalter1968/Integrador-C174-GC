const tilesProvider =
  "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png";

var map = L.map("map").setView([-34.6340735744329, -58.462834571163675], 16);
//var marker = L.marker([-34.6340735744329, -58.462834571163675]).addTo(map);
L.tileLayer(tilesProvider, {
  maxZoom: 19,
  attribution: '&copy; <a href="https://carto.com/about-carto/">Carto</a>',
}).addTo(map);
let iconMarker = L.icon({
  iconUrl: "/assets/images/punto.png",
  iconSize: [50, 70],
  iconAnchor: [30, 60],
});

let marker2 = L.marker([-34.6340735744329, -58.462834571163675], {
  icon: iconMarker,
}).addTo(map);
L.control.scale().addTo(map);
