navbar = document.querySelector('.nav');
carasoul = document.querySelector('.carsouel_container');
aim = document.querySelector('.aim');
vendors = document.querySelector('.vendors');
specialty = document.querySelector('.specialty');
footer = document.querySelector('.footer');
whats_up = document.querySelector('.whats-up');
svg_pic = document.querySelector('.svg_pic');
navbar.classList.add('hidden');
carasoul.classList.add('hidden');
aim.classList.add('hidden');
vendors.classList.add('hidden');
specialty.classList.add('hidden');
footer.classList.add('hidden');
whats_up.classList.add('hidden');
svg_pic.classList.add('hidden');

window.onload = function()
{ document.getElementById("loader").style.display = "none" ;

navbar.classList.remove('hidden');
carasoul.classList.remove('hidden');
aim.classList.remove('hidden');
vendors.classList.remove('hidden');
specialty.classList.remove('hidden');
footer.classList.remove('hidden');
whats_up.classList.remove('hidden');
svg_pic.classList.remove('hidden');
}

// document.onreadystatechange = function () {
//     if (document.readyState === 'complete') {
//       //Remove loader class from div

//       setTimeout(function(){ 
//         $('#loader').css('display', 'none');
//     }, 5000);
//     }
//   }
