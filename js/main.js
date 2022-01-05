history.scrollRestoration = "auto";

const searchEl = document.querySelector('.search');
const searchInput = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
  searchInput.focus();
});

searchInput.addEventListener('focus', () => {
  searchEl.classList.add('focused');
  searchInput.setAttribute('placeholder', '통합검색');
});

searchInput.addEventListener('blur', () => {
  searchEl.classList.remove('focused');
  searchInput.setAttribute('placeholder', '');
});

/* Badge Animation */
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(() => {
  if ( window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });

    gsap.to(toTopEl, .2, {
      x: 0,
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });

    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));

/* Top Image Animation */
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach((el, index)=>{
  gsap.to(el, 1, {
    delay: (index + 1) * .4,
    opacity: 1
  });
});

/* Promotion Slider */
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

/* Toggle Promotion window */
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

promotionToggleBtn.addEventListener('click', () => {
  if ( promotionEl.classList.contains('hide') ) {
    promotionEl.classList.remove('hide');
  } else {
    promotionEl.classList.add('hide');
  }
});

function floatingObject(selector, delay, y) {
  // Math.random()에 범위를 지정하는 방법 => Math.random() * ( Max - Min ) + Min
  gsap.to(selector, Math.random() + 1.5, {
    y,
    repeat: -1, // 무한반복
    yoyo: true,
    ease: Power1.easeInOut,
    delay: Math.random() * 2.5
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach((spyEl, index)=>{
  new ScrollMagic
  .Scene({
    triggerElement: spyEl,
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

toTopEl.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});