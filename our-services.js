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
  document.querySelectorAll('.h-wed').forEach((el) => obs.observe(el));