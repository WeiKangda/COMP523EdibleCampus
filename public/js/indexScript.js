
 

 function getQueryParams() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return Object.fromEntries(urlParams.entries());
}

async function displayGardenContent(gardenName) {
  const response = await fetch("/gardenContent");
  const arrayBuffer = await response.arrayBuffer();
  const data = new Uint8Array(arrayBuffer);
  const workbook = XLSX.read(data, { type: "array" });

  const sheet = workbook.Sheets[gardenName];
  const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

  // const gardenContentDiv = document.getElementById("gardenContent");
  const gardenContentDiv = document.querySelector("#gardenContent .plant-grid");
  const gardenTitleDiv = document.querySelector("#gardenContent .garden-title");
  gardenTitleDiv.innerHTML = `
  <h3>${gardenName} Plants</h3>
  <span class="draggable-hint">Drag horizontally to view more plants</span>`;
  gardenContentDiv.innerHTML = ""; // Clear previous content

  sheetData.slice(1).forEach((row) => {
    const plantName = row[0];
    const plantImage = row[1];
    const harvestInfo = row[2];
    const recipe1 = row[3];
    const recipe2 = row[4];

    const plantInfo = `
    <div class="plant-card swiper-slide">
    
    <h3>${plantName}</h3>
    <img src="${plantImage}" alt="${plantName}" width="150">
    <p>Harvest Info: ${harvestInfo}</p>
    <p>Recipe 1: ${recipe1}</p>
    <p>Recipe 2: ${recipe2}</p>
  
  </div>
    `;
    gardenContentDiv.innerHTML += plantInfo;
  });
}

const queryParams = getQueryParams();
const defaultGarden = "Main Garden";

if(queryParams) {
  const selectedGarden = queryParams.garden
  ? decodeURIComponent(queryParams.garden)
  : defaultGarden;
displayGardenContent(selectedGarden);
} else {
  displayGardenContent("Main Garden").then(() => {
    centerOnGarden("Main Garden");
  });
}







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

