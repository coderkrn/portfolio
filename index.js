$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
    if(this.scrollY > 500){
      $('.scroll-up-btn').addClass('show')
     }
     else{
      $('.scroll-up-btn').removeClass('show')
     }
  });


// slide up script 


$('.scroll-up-btn').click(function(){
 $('html').animate({scrollTop: 0});
});

  // Toggle Menu/Navbar Script 
 
$('.menu-btn').click(function(){
   $('.navbar .menu').toggleClass("active");  
   $('.menu-btn i').toggleClass("active");  
});   

});


// Typing Text 
var typed = new Typed(".typing",{
  strings: [ , "Full Stack Web Developer", "Writer" , "Photoghrapher",  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

var typed = new Typed(".typing-2",{
  strings: [ , "Full Stack Web Developer", "Writer" , "Photoghrapher",  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});




let click = document.getElementsByClassName('scroll-up-btn');
click.addEvenListner('click', ()=>{
    window.scrollBy(0,0);
});
