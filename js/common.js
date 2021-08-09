const searchEl = document.querySelector('.sea__rch');
const serchInputEl = searchEl.querySelector('input');



// 검색바
searchEl.addEventListener('click', function () {
  serchInputEl.focus();
});


serchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  serchInputEl.setAttribute('placeholder', '통합검색');
});

serchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  serchInputEl.setAttribute('placeholder', '');
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
