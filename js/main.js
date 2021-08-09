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


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function (){
  console.log(window.scrollY);
  if (window.scrollY > 500){
    // 배지 숨기기
    // gsap.to(요소,지속시간, 옵션)
    gsap.to(badgeEl, .6,{
      opacity: 0,
      display: 'none'
    });
    //  탑 버튼 보이기
    gsap.to(toTopEl, .2 ,{
      x: 0 
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6,{
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl, .2 ,{
      x: 100 
    });

  }
},300));

//_.throttle(함수, 밀리세컨드) 역할은 스크롤로인한 
// 다양한 함수들의 작동횟수를 줄임 (부하가 적어짐)


// 톱페이지로 올라가기

toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, {
    scrollTo: 0 //0px ... gsap의 플러그인 추가로 필요한부분
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl,1,{
    // 인덱스에 따라 순차적으로 0.7 1.4 2.1 2.7 초에 실행된다!
    delay: (index + 1) * .7, // 0부터 시작되므로 4개의 요소가 들어오니 0~3
    opacity:1
  });
});


// 슬라이드
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,// 한번에 보여지는 슬라이드 개수
  spaceBetween: 10,// 슬라이드 사이 여백
  centeredSlides: true, // 1번슬라이드가 가운데
  loop:true,
  autoplay:{
    delay: 5000 //5초
  },
  pagination:{
    el: '.promotion .swiper-pagination',//페이지 번호 요소 선택자
    clickable: true // 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion){
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // 보여주기 처리
    promotionEl.classList.remove('hide');
  }
});

function random(min, max){
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
};

function floatingObject (selector,delay,size) {
  // gsap.to(요소,시간, 옵션);
  gsap.to(selector, random(1.5,2.5), {
    y: size,
    repeat: -1, //무한 반복
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
};

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 감시
      triggerHook: .8 // 뷰포트의 가운데 가 0.5  0.8 지날때 트리거
    })
    .setClassToggle(spyEl,'show') // 트리거가 걸리면 실행
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
