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

  gsap.registerPlugin(ScrollTrigger);

  // Анимация для второй секции (Vision and Mission)
  gsap.from('.animate__paragraf', {
    scrollTrigger: {
      trigger: '.vision',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    y: 50,
    opacity: 0,
    duration: 1,
  });

  gsap.from('.title-product', {
    scrollTrigger: {
      trigger: '.title-product',
      start: 'top 80%', // когда элемент в зоне видимости
    },
    opacity: 0,
    duration: 1, // длительность анимации
    ease: 'power2.out', // тип easing
  });

  gsap.from('.product-icon', {
    scrollTrigger: {
      trigger: '.product-icon',
      start: 'top 80%', // когда элемент в зоне видимости
    },
    opacity: 0,
    y: 50, // смещение вверх
    duration: 1, // длительность анимации
    ease: 'power2.out', // тип easing
  });

  gsap.from('.two-section-text-1', {
    scrollTrigger: {
      trigger: '.two-section-text-1',
      start: 'top 80%', // когда элемент в зоне видимости
    },
    opacity: 0,
    x: -100, // смещение влево
    duration: 1, // длительность анимации
    ease: 'power2.out', // тип easing
  });

  gsap.from('.two-section-text-2', {
    scrollTrigger: {
      trigger: '.two-section-text-2',
      start: 'top 80%', // когда элемент в зоне видимости
    },
    opacity: 0,
    x: -100, // смещение влево
    duration: 1, // длительность анимации
    ease: 'power2.out', // тип easing
    delay: 3, // задержка перед началом анимации
  });

  gsap.from('.svg-icon-animate__animated', {
    scrollTrigger: {
      trigger: '.svg-icon-animate__animated',
      start: 'top 80%', // когда элемент в зоне видимости
    },
    opacity: 0,
    duration: 1, // длительность анимации
    delay: 3, // задержка перед началом анимации
    ease: 'power2.out', // тип easing
  });

  gsap.from('.swiper-animate__fadeInRight', {
    scrollTrigger: {
      trigger: '.swiper-animate__fadeInRight',
      start: 'top 80%', // когда элемент в зоне видимости
    },
    opacity: 0,
    x: 100, // смещение вправо для эффекта fadeInRight
    duration: 1, // длительность анимации
    ease: 'power2.out', // тип easing
  });

  gsap.from('.footer-center.foo-text.client-head', {
    scrollTrigger: {
      trigger: '.footer-center.foo-text.client-head',
      start: 'top 80%', // когда элемент в зоне видимости
    },
    opacity: 0,
    scale: 0.5, // уменьшение размера для эффекта zoomIn
    duration: 1, // длительность анимации
    delay: 3, // задержка перед началом анимации
    ease: 'power2.out', // тип easing
  });

  gsap.from('.foo-text.client-head.client-head-4', {
    scrollTrigger: {
      trigger: '.foo-text.client-head',
      start: 'top 80%', // когда элемент в зоне видимости
    },
    opacity: 0,
    duration: 1, // длительность анимации
    delay: 3, // задержка перед началом анимации
    ease: 'power2.out', // тип easing
  });

  gsap.from('.foo-text.client-head-11', {
    opacity: 0,
    duration: 1, // Adjust the duration as needed
    delay: 2, // Initial delay before animation starts
    scrollTrigger: {
      trigger: '.foo-text.client-head',
      start: 'top 80%', // Animation will start when the element is 80% from the top of the viewport
      toggleActions: 'play none none none', // Animation will play once on scroll
    },
  });

  gsap.from('.client-head.client-head-h2', {
    opacity: 0,
    duration: 1, // Duration of the fade-in effect
    delay: 1, // Initial delay before the animation starts
    scrollTrigger: {
      trigger: '.client-head',
      start: 'top 80%', // Start the animation when the element is 80% from the top of the viewport
      toggleActions: 'play none none none', // Play the animation once on scroll
    },
  });

  gsap.from('.aqua-p', {
    opacity: 0,
    duration: 1, // Duration of the fade-in effect
    delay: 3, // Initial delay before the animation starts
    scrollTrigger: {
      trigger: '.aqua-p',
      start: 'top 80%', // Start the animation when the element is 80% from the top of the viewport
      toggleActions: 'play none none none', // Play the animation once on scroll
    },
  });

  gsap.from('.client-p-1', {
    opacity: 0,
    duration: 1, // Duration of the fade-in effect
    delay: 1, // Initial delay before the animation starts
    scrollTrigger: {
      trigger: '.client-p',
      start: 'top 80%', // Start the animation when the element is 80% from the top of the viewport
      toggleActions: 'play none none none', // Play the animation once on scroll
    },
  });

  gsap.from('.clients-icon-1', {
    opacity: 0,
    duration: 1, // Duration of the fade-in effect
    delay: 1, // Initial delay before the animation starts
    scrollTrigger: {
      trigger: '.clients-icon',
      start: 'top 80%', // Start the animation when the element is 80% from the top of the viewport
      toggleActions: 'play none none none', // Play the animation once on scroll
    },
  });

  gsap.from('.img-two-double-1', {
    opacity: 0,
    x: -100, // Moves the image from left to right (adjust value as needed)
    duration: 1, // Duration of the animation
    delay: 1, // Initial delay before the animation starts
    scrollTrigger: {
      trigger: '.img-two-double-1',
      start: 'top 80%', // Start the animation when the element is 80% from the top of the viewport
      toggleActions: 'play none none none', // Play the animation once on scroll
    },
  });

  gsap.from('.img-two-double-2', {
    opacity: 0,
    x: -100, // Moves the image from left to right (adjust value as needed)
    duration: 2, // Duration of the animation
    delay: 1, // Initial delay before the animation starts
    scrollTrigger: {
      trigger: '.img-two-double-2',
      start: 'top 80%', // Start the animation when the element is 80% from the top of the viewport
      toggleActions: 'play none none none', // Play the animation once on scroll
    },
  });

  gsap.from('.img-two-double-3', {
    opacity: 0,
    x: -100, // Moves the image from left to right (adjust value as needed)
    duration: 3, // Duration of the animation
    delay: 1, // Initial delay before the animation starts
    scrollTrigger: {
      trigger: '.img-two-double-3',
      start: 'top 80%', // Start the animation when the element is 80% from the top of the viewport
      toggleActions: 'play none none none', // Play the animation once on scroll
    },
  });

  gsap.from('.img-two-section-x', {
    opacity: 0,
    x: 100, // Moves the image from right to left (adjust value as needed)
    duration: 1, // Duration of the animation
    delay: 2, // Initial delay before the animation starts
    scrollTrigger: {
      trigger: '.img-two-section-x',
      start: 'top 80%', // Start the animation when the element is 80% from the top of the viewport
      toggleActions: 'play none none none', // Play the animation once on scroll
    },
  });

  gsap.from('.animate__4s', {
    opacity: 0,
    duration: 1, // Duration of the fade-in effect
    delay: 2, // Initial delay before the animation starts
    scrollTrigger: {
      trigger: '.animate__4s',
      start: 'top 80%', // Start the animation when the element is 80% from the top of the viewport
      toggleActions: 'play none none none', // Play the animation once on scroll
    },
  });

  gsap.from('.superfood-1', {
    opacity: 0,
    y: 100, // Moves the element from below to its original position (adjust the value as needed)
    duration: 1, // Duration of the animation
    delay: 1, // Initial delay before the animation starts
    scrollTrigger: {
      trigger: '.superfood',
      start: 'top 80%', // Start the animation when the element is 80% from the top of the viewport
      toggleActions: 'play none none none', // Play the animation once on scroll
    },
  });

  gsap.from('.superfood-2', {
    opacity: 0,
    y: 100, // Moves the element from below to its original position (adjust the value as needed)
    duration: 1, // Duration of the animation
    delay: 2, // Initial delay before the animation starts
    scrollTrigger: {
      trigger: '.superfood-2',
      start: 'top 80%', // Start the animation when the element is 80% from the top of the viewport
      toggleActions: 'play none none none', // Play the animation once on scroll
    },
  });

  gsap.from('.superfood-3', {
    opacity: 0,
    y: 100, // Moves the element from below to its original position (adjust the value as needed)
    duration: 1, // Duration of the animation
    delay: 3, // Initial delay before the animation starts
    scrollTrigger: {
      trigger: '.superfood-3',
      start: 'top 80%', // Start the animation when the element is 80% from the top of the viewport
      toggleActions: 'play none none none', // Play the animation once on scroll
    },
  });

  gsap.from('.four-acss', {
    opacity: 0,
    duration: 1, // Duration of the fade-in effect
    delay: 2, // Initial delay before the animation starts
    scrollTrigger: {
      trigger: '.four-acss',
      start: 'top 80%', // Start the animation when the element is 80% from the top of the viewport
      toggleActions: 'play none none none', // Play the animation once on scroll
    },
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
