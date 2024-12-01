// header on scroll background
const header = document.querySelector("#header");
const resMenu = document.querySelector(".nav-links");

AOS.init();

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 60) {
    header.classList.add('shadow');
  } else {
    header.classList.remove('shadow');
  }
})

// toggle responsive menu
const navToggler = document.querySelector(".nav-toggler");
const toggleIcon = document.querySelector(".nav-toggler i");
const backdrop = document.querySelector(".backdrop-filter");

navToggler.addEventListener('click', () => {
  toggleIcon.classList.toggle('bx-x');
  resMenu.classList.toggle('show');
  backdrop.classList.toggle('show');
})

backdrop.addEventListener('click', () => {
  toggleIcon.classList.remove('bx-x');
  resMenu.classList.remove('show');
  backdrop.classList.remove('show');
})

// current year
const current = new Date();
// document.querySelector("#current-year").innerHTML = current.getFullYear();

// jquery count up numbers
$("#stat").waypoint(
  function (direction) {
    $('.counter').each(function () {
      var $this = $(this);
      jQuery({
        Counter: 0
      }).animate({
        Counter: $this.attr('data-stop')
      }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
          $this.text(Math.ceil(now));
        }
      });
    });
  }, {
    offset: "75%"
  }
);

// disbale shortcut
// window.onload = function () {
//   window.document.body.onkeydown = function () {
//     if (event.ctrlKey) {
//       event.stopPropagation();
//       event.preventDefault();
//       try {
//         event.keyCode = 0;
//       } catch (event) {

//       }
//       return false;
//     }
//     return true;
//   }
// }