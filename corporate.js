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
  document.querySelectorAll('nav').forEach((el) => observer.observe(el));
  document.querySelectorAll('.h-wed').forEach((el) => observer.observe(el));
  document.querySelectorAll('.unforget').forEach((el) => observer.observe(el));
  document.querySelectorAll('.p-cor').forEach((el) => observer.observe(el));
  document.querySelectorAll('.project button').forEach((el) => observer.observe(el));
  document.querySelectorAll('.cover').forEach((el) => observer.observe(el));
  document.querySelectorAll('.trans').forEach((el) => observer.observe(el));
  document.querySelectorAll('.empty').forEach((el) => observer.observe(el));
  document.querySelectorAll('.event-card').forEach((el) => observer.observe(el));
  document.querySelectorAll('.in-sec p').forEach((el) => observer.observe(el));
  document.querySelectorAll('.butt button').forEach((el) => observer.observe(el));
  document.querySelectorAll('.grid1 img').forEach((el) => observer.observe(el));
  document.querySelectorAll('.grid2 img').forEach((el) => observer.observe(el));
  document.querySelectorAll('.first-foot').forEach((el) => observer.observe(el));
  document.querySelectorAll('.second-foot').forEach((el) => observer.observe(el));
  document.querySelectorAll('.third-foot').forEach((el) => observer.observe(el));
  document.querySelectorAll('.card-image').forEach((el) => observer.observe(el));
  


