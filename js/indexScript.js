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
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
});
map.addLayer(layer);

const fetzer = L.polygon([
    [35.909124, -79.046470],
    [35.909135, -79.046414],
    [35.909283, -79.046460],
    [35.909271, -79.046508]
]).addTo(map).bindPopup('fetzer');

function centerOnFetzer() {
    // Center the map on Fetzer's coordinates
    const fetzerCoords = [35.909124, -79.046470];
    map.setView(fetzerCoords, 17);

    // Open Fetzer's popup
    fetzer.openPopup();
}

// Add a polygon for the main garden and a popup label for it
const main_garden = L.polygon([ 
    [35.911357, -79.047555],
    [35.911437, -79.047336],
    [35.911630, -79.047447],
    [35.911545, -79.047662]
]).addTo(map).bindPopup('Main Garden.').openPopup();

// Add an event listener for the "Center on Fetzer" button
document.getElementById("centerFetzerBtn").addEventListener("click", centerOnFetzer);

document.getElementById("centerMainGardenBtn").addEventListener("click", centerOnMainGarden);

function centerOnMainGarden() {
    // Center the map on Main Garden's coordinates
    const mainGardenCoords = [35.911437, -79.047336];
    map.setView(mainGardenCoords, 17);

    // Open Main Garden's popup
    main_garden.openPopup();
}

function onMapdbClick(e) {
    var name = prompt("placed marker at: " + e.latlng);
    var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
    marker.bindPopup(name).openPopup();
}

map.on('dblclick', onMapdbClick);

main_garden.on('click', openPlant);

function openPlant() {
    //document.getElementById("about").style.backgroundColor = '#ff6347';
    document.getElementById("plantTab").style.width = '100%';
    document.getElementById("map").style.height = "0vh";
    

}
  
function closePlant() {
    document.getElementById("plantTab").style.width = "0%";
    document.getElementById("map").style.height = "80vh";
}

