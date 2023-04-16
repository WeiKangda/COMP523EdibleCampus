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
    maxZoom: 19,
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
])
  .addTo(map)
  .bindPopup("Graham");

const stacy = L.polygon([
  [35.912904, -79.045814],
  [35.912939, -79.045819],
  [35.912961, -79.045734],
  [35.912902, -79.045694],
  [35.912867, -79.045712],
])
  .addTo(map)
  .bindPopup("Stacy");

const davis = L.polygon([
  [35.910711, -79.048374],
  [35.91072, -79.04838],
  [35.910692, -79.048366],
  [35.910644, -79.048386],
])
  .addTo(map)
  .bindPopup("Davis");

const lenoir = L.polygon([
  [35.910275, -79.048656],
  [35.910261, -79.048648],
  [35.910281, -79.048594],
  [35.910295, -79.048603],

  [35.91031, -79.048563],
  [35.910297, -79.048555],
  [35.91033, -79.048512],
  [35.910316, -79.048504],

  [35.910337, -79.048489],
  [35.910357, -79.0485],
  [35.91036, -79.048475],
  [35.910347, -79.048453],
])
  .addTo(map)
  .bindPopup("Lenoir");

const rams_head_plaza = L.polygon([
  [35.905647, -79.045832],
  [35.905626, -79.045843],
  [35.905683, -79.045986],
  [35.9057, -79.045975],
])
  .addTo(map)
  .bindPopup("Rams Head Plaza");

const SASB_plaza = L.polygon([
  [35.904384, -79.04485],
  [35.904407, -79.044804],
  [35.904367, -79.044742],
  [35.904359, -79.044761],
])
  .addTo(map)
  .bindPopup("SASB Plaza");

const hardin = L.polygon([
  [35.903815, -79.046311],
  [35.903853, -79.046303],
  [35.903861, -79.046225],
  [35.903832, -79.046223],
])
  .addTo(map)
  .bindPopup("Hardin");

const fetzer = L.polygon([
  [35.909124, -79.04647],
  [35.909135, -79.046414],
  [35.909283, -79.04646],
  [35.909271, -79.046508],
])
  .addTo(map)
  .bindPopup("Fetzer");

const main_garden = L.polygon([
  [35.911357, -79.047555],
  [35.911437, -79.047336],
  [35.91163, -79.047447],
  [35.911545, -79.047662],
])
  .addTo(map)
  .bindPopup("Main Garden.")
