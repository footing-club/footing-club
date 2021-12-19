// Navbar - Menu off canvas
function toggleMenu() {
  let menu = document.getElementById('menu');

  if (menu.classList.contains('visible')) {
    menu.classList.remove('visible');

    let backdrop = document.getElementById('menu-backdrop');
    backdrop.classList.remove('visible');
    setTimeout(() => { backdrop.remove(); }, 300);
  } else {
    menu.classList.add('visible');

    let backdrop = document.createElement('div');
    backdrop.id = 'menu-backdrop';
    backdrop.onclick = () => { return toggleMenu(); };
    let navbar = document.getElementById('navbar');
    navbar.after(backdrop);
    backdrop.focus();
    backdrop.classList.add('visible');
  }

  return false;
}

// Hero - Parallax effect
window.addEventListener('scroll', function() {
  const distance = window.scrollY
  document.querySelector('.hero-img').style.transform = `translateY(${distance * 0.2}px)`
})

// Hero - Image transition with fading
startImageTransition();

function startImageTransition() {
  var images = document.getElementsByClassName('img-slide');

  for (var i = 0; i < images.length; ++i) {
    images[i].style.opacity = 1;
  }

  var top = 1;

  var cur = images.length - 1;

  setInterval(changeImage, 3000);

  async function changeImage() {

    var nextImage = (1 + cur) % images.length;

    images[cur].style.zIndex = top + 1;
    images[nextImage].style.zIndex = top;

    await transition();

    images[cur].style.zIndex = top;

    images[nextImage].style.zIndex = top + 1;

    top = top + 1;

    images[cur].style.opacity = 1;

    cur = nextImage;

  }

  function transition() {
    return new Promise(function(resolve, reject) {
      var del = 0.01;

      var id = setInterval(changeOpacity, 10);

      function changeOpacity() {
        images[cur].style.opacity -= del;
        if (images[cur].style.opacity <= 0) {
          clearInterval(id);
          resolve();
        }
      }

    })
  }
}