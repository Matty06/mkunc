const btnHamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.header__nav');

btnHamburger.onclick = () => {
  btnHamburger.classList.toggle('open');
  nav.classList.toggle('isOpen');
}