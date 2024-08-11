document.addEventListener('DOMContentLoaded', function () {
  const textElement = document.getElementById('animated-text');
  const words = textElement.querySelectorAll('.word');

  words.forEach((word) => {
    const text = word.textContent;
    word.textContent = '';

    // Разбиваем слово на отдельные буквы и помещаем в span
    text.split('').forEach((char) => {
      const span = document.createElement('span');
      span.className = 'letter';
      span.textContent = char;
      word.appendChild(span);
    });
  });

  // Анимация GSAP
  gsap.to('.basic-head', {
    opacity: 1,
    duration: 0.5,
    ease: 'power2.out',
  });

  gsap.to('.letter', {
    scaleY: 1,
    duration: 1,
    stagger: 0.05,
    ease: 'power3.out',
  });

  const swiper = new Swiper('.img-vision .swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 19,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const swiperHer = new Swiper('.img-vision.img-vision-her .swiper', {
    loop: true,
    slidesPerView: 1,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
});
