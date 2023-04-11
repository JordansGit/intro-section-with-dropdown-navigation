let featuresItem = document.querySelector('.nav-item-features');
let companyItem = document.querySelector('.nav-item-company');
let featuresNav = document.querySelector('.nav-features-list');
let companyNav = document.querySelector('.nav-company-list');
let featuresArrow = document.querySelector('.nav-item-features > .arrow-icon')
let companyArrow = document.querySelector('.nav-item-company > .arrow-icon')
let mobileMenu = document.querySelector('.mobile-menu');
let mobileNav = document.querySelector('.nav-container');
let mobileCloseBtn = document.querySelector('.nav-close-btn');

featuresItem.addEventListener('click', function() {
  if (featuresNav.style.display === 'block') {
    featuresNav.style.display = 'none';
    featuresArrow.src = './images/icon-arrow-down.svg';
  } else {
    featuresNav.style.display = 'block';
    featuresArrow.src = './images/icon-arrow-up.svg';
  }
})

companyItem.addEventListener('click', function() {
  if (companyNav.style.display === 'block') {
    companyNav.style.display = 'none';
    companyArrow.src = './images/icon-arrow-down.svg';
  } else {
    companyNav.style.display = 'block';
    companyArrow.src = './images/icon-arrow-up.svg';
  }
})

mobileMenu.addEventListener('click', function() {
  mobileNav.classList.add('nav-open-nav');
  document.body.classList.add('nav-open-body');
})

mobileCloseBtn.addEventListener('click', function() {
  mobileNav.classList.remove('nav-open-nav');
  document.body.classList.remove('nav-open-body');
})

/* 
Learning notes: 
  It's probably better if I do the classlist add/remove/toggle for the nested nav 
  like i've done with mobile menu & mobile close btn, 
  instead of adding and removing styles in js. 

  This way we're changing elements within the class and not adding styles to the actual html element itself. 
  Makes for less buggy / more cleaner coder. 
*/ 