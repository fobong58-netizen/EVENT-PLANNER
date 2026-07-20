const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Calculate how much of the card section is intersecting
    const ratio = entry.intersectionRatio;
    
    if (entry.isIntersecting) {
      // Scale down slightly as it leaves or gets covered up
      entry.target.style.transform = `scale(${0.95 + (ratio * 0.05)})`;
      entry.target.style.opacity = `${0.7 + (ratio * 0.3)}`;
    }
  });
}, {
  threshold: Array.from({ length: 101 }, (_, i) => i / 100) // Creates 100 tracking steps
});

cards.forEach(card => observer.observe(card));


document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.grid1');
   const images0 = document.querySelectorAll('.grid2');
   const images1 = document.querySelectorAll('.grid3');
   const images2 = document.querySelectorAll('.by4-1');
   const images3 = document.querySelectorAll('.by4-2');
   const images4 = document.querySelectorAll('.by4-3');
   const images5 = document.querySelectorAll('.by4-4');

  const observerOptions = {
    root: null, // Uses the viewport
    threshold: 0.3 // Triggers when 20% of the image is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add class to scale up when it enters the viewport
        entry.target.classList.add('zoom-in');
      } else {
        // Optional: Remove class if you want it to shrink back when scrolling away
        entry.target.classList.remove('zoom-in');
      }
    });
  }, observerOptions);

  images.forEach(image => observer.observe(image));
  images0.forEach(image => observer.observe(image));
  images1.forEach(image => observer.observe(image));
  images2.forEach(image => observer.observe(image));
  images3.forEach(image => observer.observe(image));
  images4.forEach(image => observer.observe(image));
  images5.forEach(image => observer.observe(image));
});

// const hamburger = document.getElementById('hamburger-btn');
// const navLinks = document.getElementById('nav-container');

// hamburger.addEventListener('click', () => {
//   hamburger.classList.toggle('active');
//   navLinks.classList.toggle('open');
//   navLinks.style.display('block');
// });


const obs = new IntersectionObserver((entries) => {
    // Only grab items currently entering the viewport
    const visibleEntries = entries.filter(entry => entry.isIntersecting);
    
    // Loop through them and add a staggered delay based on their index
    visibleEntries.forEach((entry, index) => {
      setTimeout(() => {
        entry.target.classList.add('active');
        obs.unobserve(entry.target); // Stops watching once animated
      }, index * 550); // 150ms delay between each individual item
    });
  }, {
    threshold: 0.15 // Triggers when 15% of the item is visible
  });

  // Tell the observer to watch all elements with the 'reveal' class
  document.querySelectorAll('nav').forEach((el) => obs.observe(el));
  document.querySelectorAll('.parent').forEach((el) => obs.observe(el));
  document.querySelectorAll('.child h1').forEach((el) => obs.observe(el));
  document.querySelectorAll('.child p').forEach((el) => obs.observe(el));
  document.querySelectorAll('.top h1').forEach((el) => obs.observe(el));
  document.querySelectorAll('.lol').forEach((el) => obs.observe(el));
  document.querySelectorAll('.deco').forEach((el) => obs.observe(el));
