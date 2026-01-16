$(document).ready(function () {
  const $grid = $('.grid');

  // Initialize Isotope after images are loaded
  $grid.imagesLoaded(function () {
    $grid.isotope({
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
    });

    // Attach filter button listeners AFTER Isotope is ready
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filterValue = btn.dataset.filter;
        $grid.isotope({ filter: filterValue });
      });
    });
  });

  // Optional: Re-layout as images load
  $grid.imagesLoaded().progress(function() {
    $grid.isotope('layout');
  });
});


const skills_wrap=document.querySelector(".skills"); 
const skills_bars=document.querySelectorAll(".skill-progress");
const footer_input=document.querySelector(".footer-input")
const hamburger_menu=document.querySelector(".hamburger-menu")
const navbar=document.querySelector("header nav")
const links=document.querySelectorAll(".links a")
footer_input.addEventListener("focus",()=>
{
  footer_input.classList.add("focus");
});
function closeMenu(){
  navbar.classList.remove("open");
      document.body.classList.remove("stop-scrolling");

}
hamburger_menu.addEventListener("click",() =>{
  if(!navbar.classList.contains("open")){
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else{
    closeMenu();
  }
});
links.forEach((link)=> link.addEventListener("click",()=> closeMenu()));
footer_input.addEventListener("blur",()=>
{
  if(footer_input.value !="") return;
  footer_input.classList.remove("focus");
});
window.addEventListener("scroll", () => {
  skillsEffect();
});

function checkScroll(el) {
    let rect = el.getBoundingClientRect();
    if(window.innerHeight>=rect.top + el.offsetHeight) return true;
    return false
    }
    function skillsEffect(){
      if(!checkScroll(skills_wrap)) return;
      skills_bars.forEach((skill) => (skill.style.width=skill.dataset.progress));
    }
    var mySwiper =new Swiper(".swiper-container",{
      speed:1100,
      slidesPerView:1,
      loop:true,
      autoplay:{
        delay: 3000,
      },
        navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    });
    
