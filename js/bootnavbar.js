//   // Add slideDown animation to Bootstrap dropdown when expanding.
//   $('.dropdown').on('show.bs.dropdown', function() {
//     $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
//   });

//   // Add slideUp animation to Bootstrap dropdown when collapsing.
//   $('.dropdown').on('hide.bs.dropdown', function() {
//     $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
//   });

// $(function(){
//     var $menu = $('.dropdown-menu');
  
//     $('.dropdown-toggle').hover(
//       function() {
//         $menu.css('opacity',1);
//       },
//       function() {
//         $menu.css('opacity',0);
//       });
//   })();

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

