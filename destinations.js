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
  document.querySelectorAll('.h-wed').forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.grid1 img');
   const images1 = document.querySelectorAll('.grid3 img');

  const observerOptions = {
    root: null, // Uses the viewport
    threshold: 0.2 // Triggers when 20% of the image is visible
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
  images1.forEach(image => observer.observe(image));
});

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


  let show = document.getElementById("show");
  let open = document.getElementById("open");
  let close = document.getElementById("close");

  open.addEventListener("click", function(){
    show.style.display = "block";
  })

  close.addEventListener("click", function(){
    show.style.display = "none";
  })