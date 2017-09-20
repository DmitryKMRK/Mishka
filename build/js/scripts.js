(function() {
  var toggle = document.querySelector('.header__toggle');
  var userBlock = document.querySelector('.header__user-block');
  var nav = document.querySelector('.header__nav');
  var state = 'close';

  nav.classList.remove('header__nav--open');
  toggle.classList.remove('header__toggle--nojs');
  userBlock.classList.remove('header__user-block--open');

  toggle.addEventListener('click', function() {
    if(state === 'close') {
      nav.classList.add('header__nav--open');
      userBlock.classList.add('header__user-block--open');
      toggle.classList.add('header__toggle--open');
      state = 'open';
    } else {
      nav.classList.remove('header__nav--open');
      userBlock.classList.remove('header__user-block--open');
      toggle.classList.remove('header__toggle--open');
      state = 'close';
    }
  });
}());

//Modal

(function() {
  var btn = document.querySelector('.btn--video');
  var modal = document.querySelector('.modal');
  var overlay = document.querySelector('.modal__overlay');

  btn.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.style.display = 'block';
    overlay.style.display = 'block';
  });
}());