const uncCampusBounds = [
  [35.878870, -79.092428], // Southwest corner coordinates
  [35.953868, -79.003511]  // Northeast corner coordinates
];

// Map options, og location and zoom level
let mapOptions = {
  center: [35.9115137, -79.0476156],
  zoom: 17,
  minZoom: 14,
  maxBounds: uncCampusBounds, // Restrict the map to the UNC campus bounds
  maxBoundsViscosity: 1.0 // Makes the map stop dragging when it reaches the bounds
};

// Creating a map object
let map = new L.map("map", mapOptions);

// var for layer object, and add to map
let layer = new L.TileLayer(
  "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    maxZoom: 20,
  }
);
map.addLayer(layer);

// create polygons for gardens
const graham = L.polygon([
  [35.913114, -79.047187],
  [35.913163, -79.047168],
  [35.913171, -79.047112],
  [35.913149, -79.047073],
  [35.913105, -79.047094],
],
{
  color: 'blue',
})
  .bindPopup("Graham");

const stacy = L.polygon([
  [35.912904, -79.045814],
  [35.912939, -79.045819],
  [35.912961, -79.045734],
  [35.912902, -79.045694],
  [35.912867, -79.045712],
],
{
  color: 'blue',
})
  .bindPopup("Stacy");

const davis = L.polygon([
  [35.91073755727256, -79.04836374476254],
  [35.910678527227944, -79.04832089099631],
  [35.91062096599032, -79.04835440940766],
  [35.91069662722491, -79.04841689463107],
],
{
  color: 'blue',
})
  .bindPopup("Davis");

const lenoir = L.polygon([
  [35.91033165899914, -79.0485063497916],
  [35.910279518775916, -79.04865300298879],
  [35.91026105584168, -79.04863959583658],
  [35.91030992708592, -79.04849480928037],

],
{
  color: 'blue',
})
  .bindPopup("Lenoir");

const rams_head_plaza = L.polygon([
  [35.905647, -79.045832],
  [35.905626, -79.045843],
  [35.905683, -79.045986],
  [35.9057, -79.045975],
],
{
  color: 'blue',
})
  .bindPopup("Rams Head Plaza");

const SASB_plaza = L.polygon([
  [35.9045331106148, -79.04505763549543],
  [35.90449884590723, -79.04507403380839],
  [35.90434640535441, -79.04479822590973],
  [35.90438045625802, -79.04477906867402],
],
{
  color: 'blue',
})
  .bindPopup("SASB Plaza");

const hardin = L.polygon([
  [35.903815, -79.046311],
  [35.903853, -79.046303],
  [35.903861, -79.046225],
  [35.903832, -79.046223],
],
{
  color: 'blue',
})
  .bindPopup("Hardin");

const fetzer = L.polygon([
  [35.909124, -79.04647],
  [35.90914117362256, -79.04638128661567],
  [35.90928019161759, -79.046421509134],
  [35.909262071105054, -79.04651575725134],
],
{
  color: 'blue',
})
  .bindPopup("Fetzer");

const main_garden = L.polygon([
  [35.911357, -79.047555],
  [35.911437, -79.047336],
  [35.91163, -79.047447],
  [35.911545, -79.047662]
],
{
  color: 'blue',
})
  .bindPopup("Main_Garden");

var polyLayer = L.layerGroup(
  [main_garden, fetzer, hardin, SASB_plaza, rams_head_plaza, lenoir, davis, stacy, graham]
).addTo(map);

// iterate over all the polygons in the layer and set their name to 'joe'
polyLayer.eachLayer(function(layer) {
  layer.setStyle({color: 'red'});
});
/*
var pop = L.popup()
  .bindPopup("Main Garden.")
function onMapClick(e) {
    pop
        .setLatLng(e.latlng)
        .setContent(e.latlng.lat.toString() + ", " + e.latlng.lng.toString())
        .openOn(map);
}
map.on('click', onMapClick);



  layer.on('click', function() {
    var polyName = ''
    id = layer._leaflet_id
    if (id  = 67){
      polyName = "main_garden"
    } else if (id = 75) {
      polyName = "graham"
    } else if (id = 74) {
      polyName = "stacy"
    } else if (id = 73) {
      polyName = "davis"
    } else if (id = 72) {
      polyName = "lenoir"
    } else if (id = 71) {
      polyName = "rams_head_plaza"
    } else if (id = 70) {
      polyName = "SASB_plaza"
    } else if (id = 69) {
      polyName = "hardin"
    } else if (id = 68) {
      polyName = "fetzer"
    }
    alert('Clicked on polygon with ID ' + polyName + id);
    window.location.hash = '/' + polyName;
  });
*/