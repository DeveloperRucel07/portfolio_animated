document.addEventListener("DOMContentLoaded", () => {
  const animatedElementsTop = document.querySelectorAll(".fade-top");
  const animatedElementLeft = document.querySelectorAll(".fade-left");
  const animatedElementRight = document.querySelectorAll(".fade-right");


  const observerLeft = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-left");
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.2 });

  const observerRight = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-right");
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.1 });


  animatedElementsTop.forEach((el) => observerLeft.observe(el));
  animatedElementLeft.forEach((el) => observerRight.observe(el));
  animatedElementRight.forEach((el) => observerRight.observe(el));


  animatedElementsTop.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
      el.classList.add("slide-left");
      observerLeft.unobserve(el);
    }
  });


  animatedElementLeft.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
      el.classList.add("slide-right");
      observerRight.unobserve(el);
    }
  });


  animatedElementRight.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
      el.classList.add("slide-right");
      observerRight.unobserve(el);
    }
  });

  const cards = document.querySelectorAll('.project-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('show');
          }, index * 1000); 
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.2 });

  observer.observe(document.querySelector('.projects'));


});

let cards = document.querySelectorAll('.project-card');

cards.forEach(card =>{
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;  

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 15;
      const rotateY = ((x - centerX) / centerX) * 15;

      card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    });
})




