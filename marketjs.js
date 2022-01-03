var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });
  var swiper = new Swiper(".hotSwiper", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
  



  var nhan = document.getElementById("log");
  var nhan1 = document.getElementById("modal-1");
  nhan.addEventListener("click",function(){
    nhan1.classList.toggle("them");
  })

  var nhan2 = document.getElementById("dk");
  var nhan3 = document.getElementById("modal-2");
  nhan2.addEventListener("click",function(){
    nhan3.classList.toggle("them");
  })


  document.querySelector('#login-exit').onclick = () =>{
    nhan1.classList.remove('them');
  }
  document.querySelector('#login-exit1').onclick = () =>{
    nhan3.classList.remove('them');
  }


  window.onload = () =>{

    // if(window.scrollY > 80){
    //   document.querySelector('#modal-3').classList.add('them');
    // }else{
    //   document.querySelector('#modal-3').classList.remove('them');
    // }
  
    fadeOut();
  
  }
  
  function loader(){
    document.querySelector('#modal-3').classList.add('them');
  }
  
  function fadeOut(){
    setTimeout(loader, 5000);
  }

  document.querySelector('#login-exit3'). onclick = () =>{
    document.querySelector('#modal-3').classList.remove('them');
  }
 
var chan = document.getElementById("page__home");
var chan1 = document.getElementById("page__brand");
var chan2 = document.getElementById("home");
var chan3 = document.getElementById("brand");

document.querySelector('#brand').onclick = () =>{
  chan.style.display="none";
  chan1.style.display="block";
  chan2.classList.remove('home1');
  chan3.classList.toggle('home1');

}