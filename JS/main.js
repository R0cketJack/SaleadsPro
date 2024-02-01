const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    navigation: {
      nextEl: '.s1.swiper-button-next',
      prevEl: '.s1.swiper-button-prev',
    },
    spaceBetween: 0,
    slidesPerView: 1,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: true,
      },
      // when window width is >= 480px
      481: {
        slidesPerView: 'auto',
        spaceBetween: 0
      },
      769: {
        slidesPerView: 'auto',
        spaceBetween: 0
      },
      1201: {
        slidesPerView: 4,
        spaceBetween: 0
      }
    },
  });




function closeMenu(){
  document.getElementById('body-burger').classList.remove('open');

  let menu1 = document.getElementById('page1');
  let menu2 = document.getElementById('page2');
  menu1.classList.remove('hidden');
  menu2.classList.add('hidden');
}

document.getElementById('burger-menu').addEventListener('click', function(e){
  e.preventDefault();
  document.getElementById('body-burger').classList.add('open');
})

document.getElementById('burger-menu_close').addEventListener('click', function(e){
  e.preventDefault();
 closeMenu()
})

document.getElementById('transition_to_page2').addEventListener('click', function(e){
  e.preventDefault();
  let menu1 = e.target.closest('.mobile_menu_wrapper');
  let menu2 = menu1.nextElementSibling
  menu1.classList.add('hidden');
  menu2.classList.remove('hidden');
})

document.getElementById('transition_to_page1').addEventListener('click', function(e){
  e.preventDefault();
  let menu1 = e.target.closest('.mobile_menu_wrapper');
  let menu2 = menu1.previousElementSibling
  menu1.classList.add('hidden');
  menu2.classList.remove('hidden');
})



// document.getElementById('page1').addEventListener('click', function(e){
//   e.preventDefault();
//   let link = e.target;
//   console.log(link);
//   if ( link.tagName == 'A') {
//     let linkTarget = document.querySelector(link.getAttribute('href'));
//   console.log(linkTarget);
//   closeMenu();
//   linkTarget.scrollIntoView({
//       behavior: 'smooth'
//   });
//   } 
  
// })


let links = document.getElementsByClassName('burger-menu_modern-skills');
// console.log(links);
for (let elem of links) {
  elem.addEventListener("click", function(e){
    e.preventDefault();
    let link = e.target;
    let linkTarget = document.querySelector(link.getAttribute('href'));
    linkTarget.scrollIntoView({
            behavior: 'smooth'
        });
    closeMenu();
  })
}


// link_scroll

let ancors = document.getElementsByClassName('link_scroll');
for (let elem of ancors) {
  elem.addEventListener("click", function(e){
    e.preventDefault();
    let link = e.target;
    let linkTarget = document.querySelector(link.getAttribute('href'));
    linkTarget.scrollIntoView({
            behavior: 'smooth'
        });
  })
}

