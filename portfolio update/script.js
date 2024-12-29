function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  }
  window.addEventListener("scroll", () => {
    const skillsSection = document.getElementById("skills");
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;
  
    if (sectionPosition < screenPosition) {
      const progressBars = document.querySelectorAll(".progress");
      progressBars.forEach((bar) => {
        bar.style.transition = "width 1s ease";
        bar.style.width = bar.getAttribute("style").split(":")[1].trim();
      });
    }
  });
// JavaScript for Automatic Image Slideshow
const images = document.querySelectorAll('.slideshow img');
let currentIndex = 0;

function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length; // Cycle through images
  images[currentIndex].classList.add('active');
}

// Change image every 3 seconds
setInterval(showNextImage, 3000);
//visitor count logic
document.addEventListener("DOMContentLoaded", function () {
  const visitorCountElement = document.getElementById("visitorCount");

  // Fetch visitor count from localStorage or initialize to 0
  let visitorCount = parseInt(localStorage.getItem("visitorCount")) || 0;

  // Increment the visitor count
  visitorCount++;
  localStorage.setItem("visitorCount", visitorCount);

  // Update the counter in the footer
  visitorCountElement.textContent = visitorCount;
});

    