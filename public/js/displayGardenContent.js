export async function displayGardenContent(gardenName) {
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
    const recipe1_formated = recipe1.replace(/\n/g, '<br>');
    const recipe2 = row[4];
    const recipe2_formated = recipe2.replace(/\n/g, '<br>');

    const plantInfo = `
    <div class="plant-card swiper-slide">
    
    <h3>${plantName}</h3>
    <img src="${plantImage}" alt="${plantName}" width="150">
    <p>Harvest Info: ${harvestInfo}</p>
    <p>Recipe 1: ${recipe1_formated}</p>
    <p>Recipe 2: ${recipe2_formated}</p>
  
  </div>
    `;
    gardenContentDiv.innerHTML += plantInfo;
  });
}
