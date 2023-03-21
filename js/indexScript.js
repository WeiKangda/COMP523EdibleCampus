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


// Add a polygon for the main garden and a popup label for it
const polygon = L.polygon([ 
    [35.911357, -79.047555],
    [35.911437, -79.047336],
    [35.911630, -79.047447],
    [35.911545, -79.047662]
]).addTo(map).bindPopup('Main Garden.').openPopup();


function onMapdbClick(e) {
    var name = prompt("placed marker at: " + e.latlng);
    var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
    marker.bindPopup(name).openPopup();
}

map.on('dblclick', onMapdbClick);
polygon.on('click', openPlant);

function openPlant() {
    //document.getElementById("about").style.backgroundColor = '#ff6347';
    document.getElementById("plantTab").style.width = '100%';
    document.getElementById("map").style.height = "0vh";
    

}
  
function closePlant() {
    document.getElementById("plantTab").style.width = "0%";
    document.getElementById("map").style.height = "80vh";
}