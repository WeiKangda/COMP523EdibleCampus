// Map options, og location and zoom level
let mapOptions = {
    center: [35.9115137,-79.0476156],
    zoom: 17,
    height: 500,
    width: '100%'
}

// Creating a map object
let map = new L.map('map', mapOptions);

// var for layer object, and add to map
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    maxZoom: 18,
});
map.addLayer(layer);

const graham = L.polygon([
    [35.913114, -79.047187],
    [35.913163, -79.047168],
    [35.913171, -79.047112],
    [35.913149, -79.047073],
    [35.913105, -79.047094] 
]).addTo(map).bindPopup('graham');

const stacy = L.polygon([
    [35.912904, -79.045814],
    [35.912939, -79.045819],
    [35.912961, -79.045734],
    [35.912902, -79.045694],
    [35.912867, -79.045712] 
]).addTo(map).bindPopup('stacy');

const davis = L.polygon([
    [35.910711, -79.048374],
    [35.910720, -79.048380],
    [35.910692, -79.048366],
    [35.910644, -79.048386] 
]).addTo(map).bindPopup('davis');

const lenoir = L.polygon([
    [35.910369, -79.048509], 
    [35.910386, -79.048453],
    [35.910356, -79.048434],
    [35.910337, -79.048490]
]).addTo(map).bindPopup('lenoir');

const rams_head_plaza = L.polygon([
    [35.905647, -79.045832],
    [35.905626, -79.045843],
    [35.905683, -79.045986],
    [35.905700, -79.045975]
]).addTo(map).bindPopup('rams head plaza');

const SASB_plaza = L.polygon([
    [35.904384, -79.044850],
    [35.904407, -79.044804],
    [35.904367, -79.044742],
    [35.904359, -79.044761]
]).addTo(map).bindPopup('SASB plaza');

const hardin = L.polygon([
    [35.903815, -79.046311],
    [35.903853, -79.046303],
    [35.903861, -79.046225],
    [35.903832, -79.046223]
]).addTo(map).bindPopup('hardin');

const fetzer = L.polygon([
    [35.909124, -79.046470],
    [35.909135, -79.046414],
    [35.909283, -79.046460],
    [35.909271, -79.046508]
]).addTo(map).bindPopup('fetzer');

// Add a polygon for the main garden and a popup label for it
const main_garden = L.polygon([ 
    [35.911357, -79.047555],
    [35.911437, -79.047336],
    [35.911630, -79.047447],
    [35.911545, -79.047662]
]).addTo(map).bindPopup('Main Garden.').openPopup();

const lenoir = L.polygon([
    [35.910275, -79.048656],
    [35.910261, -79.048648],
    [35.910281, -79.048594],
    [35.910295, -79.048603],

    [35.910310, -79.048563],
    [35.910297, -79.048555],
    [35.910330, -79.048512],
    [35.910316, -79.048504],

    [35.910337, -79.048489],
    [35.910357, -79.048500],
    [35.910360, -79.048475],
    [35.910347, -79.048453]
]).addTo(map).bindPopup('Lenoir');

// Add an event listener for the "Center on Fetzer" button
document.getElementById("centerFetzerBtn").addEventListener("click", centerOnFetzer);

function centerOnFetzer() {
    // Center the map on Fetzer's coordinates
    const fetzerCoords = [35.909124, -79.046470];
    map.setView(fetzerCoords, 18);

    // Open Fetzer's popup
    fetzer.openPopup();
}

// Add an event listener for the "Center on Main_garden" button
document.getElementById("centerMainGardenBtn").addEventListener("click", centerOnMainGarden);

function centerOnMainGarden() {
    // Center the map on Main Garden's coordinates
    const mainGardenCoords = [35.911437, -79.047336];
    map.setView(mainGardenCoords, 18);

    // Open Main Garden's popup
    main_garden.openPopup();
}

// Add an event listener for the "Center on Lenoir" button
document.getElementById("centerLenoirBtn").addEventListener("click", centerOnLenoir);

function centerOnLenoir() {
    const lenoirCenter = [35.910299, -79.048571];
    map.setView(lenoirCenter, 17)

    lenoir.openPopup();
}

function onMapdbClick(e) {
    var name = prompt("placed marker at: " + e.latlng);
    var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
    marker.bindPopup(name).openPopup();
}

// map.on('dblclick', onMapdbClick);

main_garden.on('click', openPlant);

function openPlant() {
    //document.getElementById("about").style.backgroundColor = '#ff6347';
    console.log('openPlant function called!');
    document.getElementById("plantTab").style.width = '100%';
    document.getElementById("map").style.height = "0vh";
}
  
function closePlant() {
    document.getElementById("plantTab").style.width = "0%";
    document.getElementById("map").style.height = "80vh";
}

