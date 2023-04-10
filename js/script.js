let featuresItem = document.querySelector('.nav-item-features');
let companyItem = document.querySelector('.nav-item-company');
let featuresNav = document.querySelector('.nav-features-list');
let companyNav = document.querySelector('.nav-company-list');
let featuresArrow = document.querySelector('.nav-item-features > .arrow-icon')
let companyArrow = document.querySelector('.nav-item-company > .arrow-icon')

console.log(featuresArrow.src);

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