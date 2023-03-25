document.addEventListener("DOMContentLoaded", function () {
  // Get the menu button and the dropdown content
  const menuButton = document.getElementById("menuButton");
  const dropdownContent = document.querySelector(".dropdown-content");
  const centerMainGarden = document.getElementById("centerMainGarden");
  const centerLenoirGarden = document.getElementById("centerLenoir");
  const centerGrahamGarden = document.getElementById("centerGraham");
  const centerStacyGarden = document.getElementById("centerStacy");
  const centerDavisGarden = document.getElementById("centerDavis");
  const centerRamsHeadPlazaGarden = document.getElementById(
    "centerRamsHeadPlaza"
  );
  const centerSASBPlazaGarden = document.getElementById("centerSASBPlaza");
  const centerHardinGarden = document.getElementById("centerHardin");
  const centerFetzerGarden = document.getElementById("centerFetzer");

  // Add an event listener for the menu button
  menuButton.addEventListener("click", toggleDropdown);

  // Function to toggle the dropdown menu
  function toggleDropdown(event) {
    event.stopPropagation();
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  }

  // Add an event listener for clicks outside the menu
  document.addEventListener("click", function (event) {
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    }
  });

  centerMainGarden.addEventListener("click", function (event) {
    centerOnGarden("main");
    dropdownContent.style.display = "none";
  });

  centerLenoirGarden.addEventListener("click", function (event) {
    centerOnGarden("lenoir");
    dropdownContent.style.display = "none";
  });

  centerGrahamGarden.addEventListener("click", function (event) {
    centerOnGarden("graham");
    dropdownContent.style.display = "none";
  });

  centerStacyGarden.addEventListener("click", function (event) {
    centerOnGarden("stacy");
    dropdownContent.style.display = "none";
  });

  centerDavisGarden.addEventListener("click", function (event) {
    // console.log("davis button clicked");
    centerOnGarden("davis");
    dropdownContent.style.display = "none";
  });

  centerRamsHeadPlazaGarden.addEventListener("click", function (event) {
    // console.log("rams Plaza button clicked");
    centerOnGarden("ramsHeadPlaza");
    dropdownContent.style.display = "none";
  });

  centerSASBPlazaGarden.addEventListener("click", function (event) {
    // console.log("SASB Plaza button clicked");
    centerOnGarden("SASBPlaza");
    dropdownContent.style.display = "none";
  });

  centerHardinGarden.addEventListener("click", function (event) {
    centerOnGarden("hardin");
    dropdownContent.style.display = "none";
  });

  centerFetzerGarden.addEventListener("click", function (event) {
    centerOnGarden("fetzer");
    dropdownContent.style.display = "none";
  });

  function centerOnGarden(garden) {
    // let gardenCoords;
    // let gardenName;
    let gardenCoords, gardenElement, gardenName;

    if (garden === "main") {
      gardenCoords = [35.911437, -79.047336];
      gardenElement = main_garden;
      gardenName = "Main Garden";
    } else if (garden === "lenoir") {
      gardenCoords = [35.910299, -79.048571];
      gardenElement = lenoir;
      gardenName = "Lenoir Garden";
    } else if (garden === "graham") {
      gardenCoords = [35.913114, -79.047187];
      gardenElement = graham;
      gardenName = "Graham Garden";
    } else if (garden === "stacy") {
      gardenCoords = [35.912904, -79.045814];
      gardenElement = stacy;
      gardenName = "Stacy Garden";
    } else if (garden === "davis") {
      gardenCoords = [35.910711, -79.048374];
      gardenElement = davis;
      gardenName = "Davis Garden";
    } else if (garden === "ramsHeadPlaza") {
      gardenCoords = [35.905647, -79.045832];
      gardenElement = rams_head_plaza;
      gardenName = "Rams Head Plaza Garden";
    } else if (garden === "SASBPlaza") {
      gardenCoords = [35.904367, -79.044742];
      gardenElement = SASB_plaza;
      gardenName = "SASB Plaza Garden";
    } else if (garden === "hardin") {
      gardenCoords = [35.903815, -79.046311];
      gardenElement = hardin;
      gardenName = "Hardin Garden";
    } else if (garden === "fetzer") {
      gardenCoords = [35.909124, -79.04647];
      gardenElement = fetzer;
      gardenName = "Fetzer Garden";
    }

    // map.setView(gardenCoords, 18);
    // gardenElement.bindPopup(gardenName, { closeOnClick: false }).openPopup();
    const currentZoom = map.getZoom();
    const zoomOutLevel = currentZoom - 1;
    const zoomInLevel = 18;

    map.flyTo(map.getCenter(), zoomOutLevel, { animate: true, duration: 1 })
    .once('moveend', () => {
        map.flyTo(gardenCoords, zoomInLevel, { animate: true, duration: 1 })
            .once('moveend', () => {
              gardenElement.openPopup();
            });
    });
   
  }
});
