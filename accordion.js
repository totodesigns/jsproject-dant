// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     let panel = this.nextElementSibling;

//     if (panel.style.display === "block") {
//         panel.style.display = "none";
//         this.style.borderBottom = "1px solid";
//     } else {
//         panel.style.display = "block";
//         panel.style.borderBottom = "1px solid";
//         this.style.borderBottom = "none";
//       }
//   });
// }

var acc = document.getElementsByClassName("accordion");
var panels = document.getElementsByClassName("panel"); // Set variable for an array of all panels

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    let panel = this.nextElementSibling; // Target the panel where "this" represents the accordion button

    // Toggle display of the clicked panel
    if (panel.style.display === "block") {
      panel.style.display = "none";
      this.style.borderBottom = "1px solid"; // Set bottom border when closing
    } else {

      // Close all panels and reset borders
      for (let j = 0; j < panels.length; j++) {
        panels[j].style.display = "none";
        acc[j].style.borderBottom = "1px solid";
        console.log(panels[j]);
      }

      // Open the clicked panel and remove bottom border
      panel.style.display = "block";
      panel.style.borderBottom = "1px solid";
      this.style.borderBottom = "none"; // Remove bottom border for the clicked accordion
    }
  });
}
