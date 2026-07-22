// Force every page load/reload to start at the very top,
// instead of the browser restoring your last scroll position
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

const images = [
    `/background1.jpg`,
    `/background2.jpg`,
    `/background3.jpg`,
    `/background4.jpg`,
    `/background5.jpg`,
]

let currentIndex = 0;

const bgImage = document.querySelector(`header`)

bgImage.style.backgroundImage = `url(${images[currentIndex]})`;

function showHeaderImage(){
    bgImage.style.backgroundImage = `url(${images[currentIndex]})`;

}

setInterval(() => {
    currentIndex++

    if (currentIndex >= images.length){
        currentIndex = 0;
    }

    showHeaderImage();
}, `2000`);


const observer = new IntersectionObserver((entries) => {
    // Only grab items currently entering the viewport
    const visibleEntries = entries.filter(entry => entry.isIntersecting);
    
    // Loop through them and add a staggered delay based on their index
    visibleEntries.forEach((entry, index) => {
      setTimeout(() => {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Stops watching once animated
      }, index * 550); // 150ms delay between each individual item
    });
  }, {
    threshold: 0.15 // Triggers when 15% of the item is visible
  });

  // Tell the observer to watch all elements with the 'reveal' class
  document.querySelectorAll('.desktop nav').forEach((el) => observer.observe(el));
  document.querySelectorAll('.slider-content h1').forEach((el) => observer.observe(el));
  document.querySelectorAll('.line').forEach((el) => observer.observe(el));
  document.querySelectorAll('.underline p').forEach((el) => observer.observe(el));
  document.querySelectorAll('.underline button').forEach((el) => observer.observe(el));
  document.querySelectorAll('.top-sec h2').forEach((el) => observer.observe(el));
  document.querySelectorAll('.top-sec h1').forEach((el) => observer.observe(el));
  document.querySelectorAll('.top-sec p').forEach((el) => observer.observe(el));
  document.querySelectorAll('.images img').forEach((el) => observer.observe(el));
  document.querySelectorAll('.mid-sec p').forEach((el) => observer.observe(el));
  document.querySelectorAll('.known h1').forEach((el) => observer.observe(el));
  document.querySelectorAll('.image-card').forEach((el) => observer.observe(el));
  document.querySelectorAll('.about-text h1').forEach((el) => observer.observe(el));
  document.querySelectorAll('.about-text p').forEach((el) => observer.observe(el));
  document.querySelectorAll('.mor').forEach((el) => observer.observe(el));
  document.querySelectorAll('.first-sec h2').forEach((el) => observer.observe(el));
  document.querySelectorAll('.first-sec p').forEach((el) => observer.observe(el));
  document.querySelectorAll('.star p').forEach((el) => observer.observe(el));
  document.querySelectorAll('.star img').forEach((el) => observer.observe(el));
  document.querySelectorAll('.wed h1').forEach((el) => observer.observe(el));
  document.querySelectorAll('.wedding-card').forEach((el) => observer.observe(el));
  document.querySelectorAll('.first-foot').forEach((el) => observer.observe(el));
  document.querySelectorAll('.first-foot p').forEach((el) => observer.observe(el));
  document.querySelectorAll('.first-foot img').forEach((el) => observer.observe(el));
  document.querySelectorAll('.second-foot').forEach((el) => observer.observe(el));
  document.querySelectorAll('.second-foot h2').forEach((el) => observer.observe(el));
  document.querySelectorAll('.second-foot a').forEach((el) => observer.observe(el));
  document.querySelectorAll('.third-foot').forEach((el) => observer.observe(el));
  document.querySelectorAll('.third-foot p').forEach((el) => observer.observe(el));
  document.querySelectorAll('.third-foot h2').forEach((el) => observer.observe(el));
  document.querySelectorAll('.shoe').forEach((el) => observer.observe(el));
  document.querySelectorAll('.black-butt').forEach((el) => observer.observe(el));



const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// Force closed on load, in case any other script touches these classes
menuToggle.classList.remove('active');
navMenu.classList.remove('active');

menuToggle.addEventListener('click', () => {
    // Both elements get the "active" class at the exact same moment
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

const images1 = [
    `/background1.jpg`,
    `/background2.jpg`,
    `/background3.jpg`,
    `/background4.jpg`,
    `/background5.jpg`,
]

let Index = 0;

const backImage1 = document.querySelector(`.mobile-header`)

backImage1.style.backgroundImage = `url(${images1[Index]})`;

function showMobileImage(){
    backImage1.style.backgroundImage = `url(${images1[Index]})`;

}

setInterval(() => {
    Index++

    if (Index >= images1.length){
        Index = 0;
    }

    showMobileImage();
}, `5500`);