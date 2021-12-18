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
  document.querySelector('.hero img').style.transform = `translateY(${distance * 0.2}px)`
})