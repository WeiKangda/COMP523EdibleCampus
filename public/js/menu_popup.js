import { displayGardenContent } from "./displayGardenContent.js";
import { addNavigateButtonEventListener } from "./iniNav.js";

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const dropdownContent = document.querySelector(".dropdown-content");

  menuButton.addEventListener("click", toggleDropdown);

  function toggleDropdown(event) {
    event.stopPropagation();
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  }

  document.addEventListener("click", function (event) {
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    }
  });

  dropdownContent.addEventListener("click", async function (event) {
    const target = event.target;
    if (target.classList.contains("garden-button")) {
      const garden = target.getAttribute("data-garden");

      centerOnGarden(garden);
      await displayGardenContent(garden);
      dropdownContent.style.display = "none";
    }
  });

  function centerOnGarden(garden) {
    // let gardenCoords;
    // let gardenName;
    let gardenCoords, gardenElement, gardenName, gardenImageSrc;

   

    if (garden === "Main Garden") {
      gardenCoords = [35.911437, -79.047336];
      gardenElement = main_garden;
      gardenName = "Main Garden";
      gardenImageSrc = "./img/main_garden.png";
    } else if (garden === "Lenoir Garden") {
      gardenCoords = [35.910299, -79.048571];
      gardenElement = lenoir;
      gardenName = "Lenoir Garden";
      gardenImageSrc = "./img/Lenoir.png";
      // offset = [15, -10];
    } else if (garden === "Graham Garden") {
      gardenCoords = [35.913114, -79.047187];
      gardenElement = graham;
      gardenName = "Graham Garden";
      gardenImageSrc = "./img/graham.png";
    } else if (garden === "Stacy Garden") {
      gardenCoords = [35.912904, -79.045814];
      gardenElement = stacy;
      gardenName = "Stacy Garden";
      gardenImageSrc = "./img/Stacy.png";
    } else if (garden === "Davis Garden") {
      gardenCoords = [35.910711, -79.048374];
      gardenElement = davis;
      gardenName = "Davis Garden";
      gardenImageSrc = "./img/Davis.png";
    } else if (garden === "Rams Head Plaza Garden") {
      gardenCoords = [35.905647, -79.045832];
      gardenElement = rams_head_plaza;
      gardenName = "Rams Head Plaza Garden";
      gardenImageSrc = "./img/RamsHeadPlaza.png";
    } else if (garden === "SASB Plaza Garden") {
      gardenCoords = [35.904367, -79.044742];
      gardenElement = SASB_plaza;
      gardenName = "SASB Plaza Garden";
      gardenImageSrc = "./img/SASBPlaza.png";
    } else if (garden === "Hardin Garden") {
      gardenCoords = [35.903815, -79.046311];
      gardenElement = hardin;
      gardenName = "Hardin Garden";
      gardenImageSrc = "./img/Hardin.png";
    } else if (garden === "Fetzer Garden") {
      gardenCoords = [35.909124, -79.04647];
      gardenElement = fetzer;
      gardenName = "Fetzer Garden";
      gardenImageSrc = "./img/Fetzer.png";
    }

    map.closePopup();
    const currentZoom = map.getZoom();
    const zoomOutLevel = currentZoom - 1;
    const zoomInLevel = 18;

    function flyToGarden() {
      // Fly out to a wider view before flying to the garden location
      return map.flyTo(map.getCenter(), zoomOutLevel, { animate: true, duration: 0.5 });
    }
  
    function flyToGardenCoords() {
      map
        .flyTo(gardenCoords, zoomInLevel, { animate: true, duration: 0.5 })
        .once("moveend", () => showGardenPopup(garden, gardenElement, gardenCoords, gardenName, gardenImageSrc));
    }
  
    // Start the process by flying to the garden
    flyToGarden().once("moveend", flyToGardenCoords);
  }

  function getQueryParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return Object.fromEntries(urlParams.entries());
  }
  const queryParams = getQueryParams();
  const defaultGarden = "Main Garden";

  if (queryParams) {
    const selectedGarden = queryParams.garden
      ? decodeURIComponent(queryParams.garden)
      : defaultGarden;
    displayGardenContent(selectedGarden).then(() => {
      centerOnGarden(selectedGarden);
    });
  } else {
    displayGardenContent("Main Garden").then(() => {
      centerOnGarden("Main Garden");
    });
  }
});


function showGardenPopup(garden, gardenElement, gardenCoords, gardenName, gardenImageSrc) {
  gardenElement.bindPopup(
    `<img src="${gardenImageSrc}" alt="${gardenName}" class="popup-image">
    <p class="popup-text">${gardenName}</p>
    <button id="navigateButton" class="navigate-button"><i class="fas fa-map-marker-alt"></i> Navigate by Google Maps</button>`,
    { className: "custom-popup" }
  );

  gardenElement.openPopup();

 // Update the URL with the selected garden
      history.pushState({}, "", `?garden=${encodeURIComponent(garden)}`);

  addNavigateButtonEventListener(gardenCoords);
}

// const queryParams = getQueryParams();
// const defaultGarden = "Main Garden";

// const selectedGarden = queryParams.garden
//   ? decodeURIComponent(queryParams.garden)
//   : defaultGarden;

// displayGardenContent(selectedGarden).then(() => {
//   centerOnGarden(selectedGarden);
// });

// function onLocationFound(e) {

//   // Remove the event listener to prevent multiple routes
//   map.off("locationfound", onLocationFound);

//   // Add routing control with user's current location and garden location
//   window.routingControl = L.Routing.control({
//     waypoints: [e.latlng, L.latLng(gardenCoords)],
//     // router: new L.Routing.osrmv1({
//     //   serviceUrl: "https://router.project-osrm.org/route/v1",s
//     // }),
//     router: new L.Routing.mapbox(
//       "pk.eyJ1IjoiaGd1bzUiLCJhIjoiY2xnYjJpYXJpMGEycDN0bnphNDR4bGMzNCJ9.7_xQzJQ2f3jt5TgMkRTI0A",
//       {
//         profile: "mapbox/walking",
//       }
//     ),
//     show: false,
//     lineOptions: {
//       styles: [{ color: "blue", opacity: 0.8, weight: 5 }],
//     },
//     fitSelectedRoutes: true,
//   }).addTo(map);
// }
