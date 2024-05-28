const test = document.getElementById('test');
const test1 = document.getElementById('test1');
//test.textContent = "123124";

var map = L.map('map').setView([51.505, -0.09], 1);
// var mymap = L.map('mapid').setView([0, 0], 2);
// L.point(569, 569);
L.tileLayer(
  'https://assets.game8.jp/uploads/ik9X84vQd2UK3g6zuND3IfQw51qYiR.jpg',
  {
    foo: 'bar',
    minZoom: -7,
    maxNativeZoom: 0,
    zoomOffset: 7,
  }
).addTo(map);

// var imageUrl =
//   'https://assets.game8.jp/uploads/ik9X84vQd2UK3g6zuND3IfQw51qYiR.jpg';
// var errorOverlayUrl = 'https://cdn-icons-png.flaticon.com/512/110/110686.png';
// var altText =
//   'Image of Newark, N.J. in 1922. Source: The University of Texas at Austin, UT Libraries Map Collection.';
// var latLngBounds = L.latLngBounds([
//   [40.799311, -74.118464],
//   [40.68202047785919, -74.28],
// ]);

// var imageOverlay = L.imageOverlay(imageUrl, latLngBounds, {
//   opacity: 0.8,
//   errorOverlayUrl: errorOverlayUrl,
//   alt: altText,
//   interactive: true,
// }).addTo(map);

// L.rectangle(latLngBounds).addTo(map);
// map.fitBounds(latLngBounds);

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
// attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',

// id: 'mapbox.streets',
// accessToken: 'ADD MAPBOX ACCESS TOKEN HERE'
// }).addTo(mymap);

marker1 = L.marker([51.505, -0.09]).addTo(map);
marker2 = L.marker([0, 0]).addTo(map);
// marker3 = L.marker([39.760979, -84.192200]).addTo(mymap);

function testFunction() {
  imageOverlay.closePopup();
  marker1.bindPopup('<b>Spiderman</b><br>New York, USA').openPopup();
}

function testFunction2() {
  imageOverlay.closePopup();
  marker2.bindPopup('<b>Hulk</b><br>Ohio, USA').openPopup();
}

// function testFunction3() {
//   mymap.closePopup();
//   marker3.bindPopup("<b>Wolverine</b><br>Cold Lake, Alberta, Canada").openPopup();
// }
