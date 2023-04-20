const navElements = document.querySelectorAll('[data-index="navElement"]');
const ancors = document.querySelectorAll('[data-index="ancor"]');

ancors.forEach((ancor, index) => {
  ancor.addEventListener("click", (e) => {
    e.preventDefault();
    const targetElement = navElements[index];
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});



const btn = document.querySelector('#button-to-top')

window.addEventListener('scroll', () => {
  if(window.scrollY > 300){
    btn.classList.add('show');
  } else {
    btn.classList.remove('show')
  }
})

btn.addEventListener('click', (e) => {
  e.preventDefault;
  window.scrollTo(0, 0);
})
