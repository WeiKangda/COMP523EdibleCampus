
const uncCampusBounds = [
  [35.87887, -79.092428], // Southwest corner coordinates
  [35.953868, -79.003511], // Northeast corner coordinates
];

// Map options, og location and zoom level
let mapOptions = {
  center: [35.9115137, -79.0476156],
  zoom: 17,
  minZoom: 14,
  maxBounds: uncCampusBounds, // Restrict the map to the UNC campus bounds
  maxBoundsViscosity: 1.0, // Makes the map stop dragging when it reaches the bounds
};

// Creating a map object
let map = new L.map("map", mapOptions);

// var for layer object, and add to map
let layer = new L.TileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    maxZoom: 19,
  }
);
map.addLayer(layer);

const graham = L.polygon([
  [35.913114, -79.047187],
  [35.913163, -79.047168],
  [35.913171, -79.047112],
  [35.913149, -79.047073],
  [35.913105, -79.047094],
]).addTo(map);

const stacy = L.polygon([
  [35.912904, -79.045814],
  [35.912939, -79.045819],
  [35.912961, -79.045734],
  [35.912902, -79.045694],
  [35.912867, -79.045712],
]).addTo(map);

const davis = L.polygon([
  [35.910711, -79.048374],
  [35.91072, -79.04838],
  [35.910692, -79.048366],
  [35.910644, -79.048386],
]).addTo(map);

const lenoir = L.polygon([
  [35.91027379845903, -79.0486514081524],
  [35.91032755341199, -79.04850998318146],
  [35.91031335870982, -79.04850754506263],
  [35.910263183220366, -79.04864409379591],
]).addTo(map);

const rams_head_plaza = L.polygon([
  [35.905647, -79.045832],
  [35.905626, -79.045843],
  [35.905683, -79.045986],
  [35.9057, -79.045975],
]).addTo(map);

const SASB_plaza = L.polygon([
  [35.904384, -79.04485],
  [35.904407, -79.044804],
  [35.904367, -79.044742],
  [35.904359, -79.044761],
]).addTo(map);

const hardin = L.polygon([
  [35.903815, -79.046311],
  [35.903853, -79.046303],
  [35.903861, -79.046225],
  [35.903832, -79.046223],
]).addTo(map);

const fetzer = L.polygon([
  [35.909124, -79.04647],
  [35.909135, -79.046414],
  [35.909283, -79.04646],
  [35.909271, -79.046508],
]).addTo(map);

const main_garden = L.polygon([
  [35.911357, -79.047555],
  [35.911437, -79.047336],
  [35.91163, -79.047447],
  [35.911545, -79.047662],
]).addTo(map);


// const queryParams = new URLSearchParams(window.location.search);
// const gardenName = queryParams.get('garden');

// if (gardenName) {
//   console.log(`Garden name from URL: ${gardenName}`);
// } 

