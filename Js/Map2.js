var map = L.map('map', {
  minZoom: -7,
  maxZoom: 4,
  center: [0, 0],
  zoom: -1,
  maxBoundsViscosity: 1,
  crs: L.CRS.Simple,
});
//zoom 4 full size image is 4608px * 3456 px
//zoom 3 2304 * 1728
//zoom 2 1152 * 864
//zoom 1 576 * 432
marker1 = L.marker([500, 500]).addTo(map);
var image = L.imageOverlay(
  'https://assets.game8.jp/uploads/ik9X84vQd2UK3g6zuND3IfQw51qYiR.jpg',
  [
    [0, 0],
    [1000, 1000],
  ]
); //initial size at zoom 1 )
image.addTo(map);
// tell leaflet that the map is exactly as big as the image
map.setMaxBounds(new L.LatLngBounds([0, 0], [1000, 1000])); // prevent panning outside the image area.
//Note the viscosity setting keeps the image from being dragged outside this

// function testFunction() {
//   imageOverlay.closePopup();
//   marker1.bindPopup('<b>Spiderman</b><br>New York, USA').openPopup();
// }
