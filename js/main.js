//  Category

const bikeCategories = document.querySelectorAll('#bike');
const bikeImage = document.getElementById('image_bike');
let swiper = document.querySelector("swiper-container");

bikeCategories.forEach(category => {
    category.addEventListener('click', () => {
        const categoryName = category.textContent.trim();
        let imagePrefix = '';
        switch (categoryName) {
        case 'Mountain Bikes':
            imagePrefix = 'mountain_bike';
            swiper.innerHTML = `
                <swiper-slide> <img src="img/${imagePrefix}1.png" alt=""></swiper-slide>
                <swiper-slide><img src="img/${imagePrefix}2.png" alt=""></swiper-slide>
                <swiper-slide><img src="img/${imagePrefix}3.png" alt=""></swiper-slide>
                <swiper-slide><img src="img/${imagePrefix}4.png" alt=""></swiper-slide>
            `;
            break;
        case 'Road Bikes':
            imagePrefix = 'road_bike';
            swiper.innerHTML = `
                <swiper-slide> <img src="img/${imagePrefix}1.png" alt=""></swiper-slide>
                <swiper-slide><img src="img/${imagePrefix}2.png" alt=""></swiper-slide>
                <swiper-slide><img src="img/${imagePrefix}3.png" alt=""></swiper-slide>
                <swiper-slide><img src="img/${imagePrefix}4.png" alt=""></swiper-slide>
            `;
            break;
        case 'Hybrid Bikes':
            imagePrefix = 'hybrid_bike';
            swiper.innerHTML = `
                <swiper-slide> <img src="img/${imagePrefix}1.png" alt=""></swiper-slide>
                <swiper-slide><img src="img/${imagePrefix}2.png" alt=""></swiper-slide>
                <swiper-slide><img src="img/${imagePrefix}3.png" alt=""></swiper-slide>
                <swiper-slide><img src="img/${imagePrefix}4.png" alt=""></swiper-slide>
            `;
            break;
        case 'Kids Bikes':
            imagePrefix = 'kids_bike';
            swiper.innerHTML = `
                <swiper-slide> <img src="img/${imagePrefix}1.png" alt=""></swiper-slide>
                <swiper-slide><img src="img/${imagePrefix}2.png" alt=""></swiper-slide>
                <swiper-slide><img src="img/${imagePrefix}3.png" alt=""></swiper-slide>
                <swiper-slide><img src="img/${imagePrefix}4.png" alt=""></swiper-slide>
            `;
            break;
        }
        bikeImage.src = `img/${imagePrefix}5.png`;

    });
});

//  Modal Window

(function() {
    "use strict";
  
    const backdrop = document.querySelector('#modal-backdrop');
    document.addEventListener('click', modalHandler);
  
    function modalHandler(evt) {
      const modalBtnOpen = evt.target.closest('.js-modal');
      if (modalBtnOpen) { // open btn click
        const modalSelector = modalBtnOpen.dataset.modal;
        showModal(document.querySelector(modalSelector));
      }
  
      const modalBtnClose = evt.target.closest('.modal-close');
      if (modalBtnClose) { // close btn click
        evt.preventDefault();
        hideModal(modalBtnClose.closest('.modal-window'));
      }
  
      if (evt.target.matches('#modal-backdrop')) { // backdrop click
        hideModal(document.querySelector('.modal-window.show'));
      }
    }
  
    function showModal(modalElem) {
      modalElem.classList.add('show');
      backdrop.classList.remove('hidden');
    }
  
    function hideModal(modalElem) {
      modalElem.classList.remove('show');
      backdrop.classList.add('hidden');
    }
  })();