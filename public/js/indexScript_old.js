
import $ from 'jquery';
import 'owl.carousel';


// Initialize Owl Carousel after adding all plant cards
$('.owl-carousel').owlCarousel({
  loop: false,
  margin: 10,
  nav: true, // Show navigation arrows
  responsive: {
    0: {
      items: 1 // Number of items to show on smaller screens
    },
    600: {
      items: 3 // Number of items to show on larger screens
    },
    1000: {
      items: 5 // Number of items to show on even larger screens
    }
  }
});



