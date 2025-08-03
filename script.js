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


});

