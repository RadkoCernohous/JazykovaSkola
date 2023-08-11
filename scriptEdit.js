// Get the modal
let modal = document.getElementById("myModal");
modal.style.display = "none";
// Get the modal image
let modalImg = document.getElementById("img01");

// Get the caption text
let captionText = document.getElementById("caption");

// Get the aside and nav elements
let aside = document.getElementById("aside");
let nav = document.getElementById("nav");

// Get all the images
let images = document.querySelectorAll('.obrazekEfekt');

// Loop through all the images
images.forEach(function (img) {
  // Add an event listener to each image
  img.addEventListener('click', function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    aside.hidden = true;
    nav.hidden = true;
  });
});

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  aside.hidden = false;
  nav.hidden = false;
}
// When the user clicks outside the modal, close the modal
document.addEventListener('click', function (event) {
  if (!(event.target.closest("img")) && modal.style.display == "block") {
    modal.style.display = "none";
    aside.hidden = false;
    nav.hidden = false;
  }
});