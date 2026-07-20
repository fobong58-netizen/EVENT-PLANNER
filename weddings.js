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
  document.querySelectorAll('.art').forEach((el) => observer.observe(el));
  document.querySelectorAll('.artist').forEach((el) => observer.observe(el));
  document.querySelectorAll('.love').forEach((el) => observer.observe(el));
  document.querySelectorAll('.tan').forEach((el) => observer.observe(el));
  document.querySelectorAll('.art-image img').forEach((el) => observer.observe(el));
  document.querySelectorAll('.art-image2 img').forEach((el) => observer.observe(el));
  document.querySelectorAll('.german').forEach((el) => observer.observe(el));
  document.querySelectorAll('.p-event').forEach((el) => observer.observe(el));
  document.querySelectorAll('.ger').forEach((el) => observer.observe(el));
  document.querySelectorAll('.contact').forEach((el) => observer.observe(el));
  document.querySelectorAll('.first-foot p').forEach((el) => observer.observe(el));
  document.querySelectorAll('.second-foot h2').forEach((el) => observer.observe(el));
  document.querySelectorAll('.second-foot a').forEach((el) => observer.observe(el));
  document.querySelectorAll('.third-foot p').forEach((el) => observer.observe(el));
  document.querySelectorAll('.third-foot h2').forEach((el) => observer.observe(el));

  let show = document.getElementById("show");
  let open = document.getElementById("open");
  let close = document.getElementById("close");

  open.addEventListener("click", function(){
    show.style.display = "block";
  })

  close.addEventListener("click", function(){
    show.style.display = "none";
  })
  


