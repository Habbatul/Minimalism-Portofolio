const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.scrollAnimate');
  hiddenElements.forEach((el) => observer.observe(el));
//animasi 3
  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show2');
      } else {
        entry.target.classList.remove('show2');
      }
    });
  });
  
  const hiddenElements2 = document.querySelectorAll('.scrollAnimate2');
  hiddenElements2.forEach((el) => observer2.observe(el));
//animasi3
const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show3');
      } else {
        entry.target.classList.remove('show3');
      }
    });
  });
  
  const hiddenElements3 = document.querySelectorAll('.stackUsed');
  hiddenElements3.forEach((el) => observer3.observe(el));

  //animasi4
const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show4');
    } else {
      entry.target.classList.remove('show4');
    }
  });
});

const hiddenElements4 = document.querySelectorAll('.star');
hiddenElements4.forEach((el) => observer4.observe(el));