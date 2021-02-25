$(function(){
    $('.carousel__item').eq(0).addClass('active');
    var total = $('.carousel__item').length;
    var current = 0;
    $('#moveRight').on('click', function(){
      var next=current;
      current= current+1;
      setSlide(next, current);
    });
    $('#moveLeft').on('click', function(){
      var prev=current;
      current = current- 1;
      setSlide(prev, current);
    });
    function setSlide(prev, next){
      var slide= current;
      if(next>total-1){
       slide=0;
        current=0;
      }
      if(next<0){
        slide=total - 1;
        current=total - 1;
      }
             $('.carousel__item').eq(prev).removeClass('active');
             $('.carousel__item').eq(slide).addClass('active');
        setTimeout(function(){
  
        },800);
      
  
      
      console.log('current '+current);
      console.log('prev '+prev);
    }
  });

  // automtice animation of the slider.
// Autoplay Feature
const slides = document.querySelectorAll('.carousel__item'),
      // number_controls = document.querySelectorAll('.carousel__nav span'),
      // btnSlide1 = number_controls[0],
      // btnSlide2 = number_controls[1],
      // btnSlide3 = number_controls[2],
      next_control = document.getElementById('moveLeft'),
      prev_control = document.getElementById('moveRight');
let   SlideIndex = 0;

console.log(SlideIndex);
function automatic_showSlides() {
  for (i = 0; i < slides.length; i++) {
    // slides[i].style.display = "none"; 
    slides[i].classList.remove('active'); 
  }
  SlideIndex++;
  if (SlideIndex > slides.length) {SlideIndex = 1}    
  // for (i = 0; i < number_controls.length; i++) {
  //    number_controls[i].className = number_controls[i].className.replace(" active", "");
  //  }
  // slides[SlideIndex-1].style.display = "block";
  slides[SlideIndex-1].classList.add('active');  
  // number_controls[SlideIndex-1].className += " active";
  setTimeout(automatic_showSlides, 2000); // Change image every 2 seconds
}

automatic_showSlides();
