// Smooth scroll for "View My Work"
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple form handler (demo only)
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const data = Object.fromEntries(new FormData(this).entries());
  alert(
    `Thanks, ${data.name}!\n` +
    `Email: ${data.email}\n` +
    `Phone: ${data.phone}\n\n` +
    `Message received. (Demo only)`
  );
  this.reset();
});