setTimeout(function() {

    let body = document.querySelector('body'),
        modalOverlay = document.querySelector('.modal__overlay');



    // Slider Init ------------------------------------

    const swiperDesigners = new Swiper('.designers__slider', {
        spaceBetween: 20,
        slidesPerView: "auto",
        slidesPerGroup: 1,
        speed: 500,
        navigation: {
            prevEl: '.slider-btn-prev',
            nextEl: '.slider-btn-next',
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        breakpoints: {
            576: {
                slidesPerGroup: 1,
                slidesPerView: "auto",
                spaceBetween: 20,
            },
            767: {
                slidesPerGroup: 2,
                spaceBetween: 30,
            },
            1199: {
                slidesPerGroup: 2,
                spaceBetween: 40,
            }
        }
    });

    const swiperAboutHPGallery = new Swiper('.about__hpsection-slider .swiper-container', {
        slidesPerGroup: 1,
        speed: 1000,
        navigation: {
            prevEl: '.about__hpsection-slider .slider-btn-prev',
            nextEl: '.about__hpsection-slider .slider-btn-next',
        },

    });

    // About Tabs -----------------------------------------

    let aboutAccorion = document.querySelectorAll('.about__accordion'),
        aboutAccoriondBtn = document.querySelectorAll('.about__accordion-title button'),
        aboutAccoriondSlide = document.querySelectorAll('.about__accordion-slide');

    aboutAccoriondBtn.forEach(function(navTitleBtn, index) {

        navTitleBtn.addEventListener('click', function() {

            var indexSlide = parseInt(index);
            swiperAboutHPGallery.slideTo(indexSlide, 500);


            aboutAccorion.forEach(i => i.classList.remove('active-accordion'));
            aboutAccoriondSlide.forEach(function(slide, index) {
                slide.style.height = '0px';

                slide.addEventListener('transitionend', function() {
                    slide.classList.remove('open-ul');
                }, {
                    once: true
                });
            });

            var parentAccordion = this.parentElement.parentElement.classList.add('active-accordion');
            var slideActive = this.parentElement.nextElementSibling;

            slideActive.classList.add('open-slide');
            slideActive.style.height = 'auto';

            var height = slideActive.clientHeight + 'px';
            slideActive.style.height = '0px';

            setTimeout(function() {
                slideActive.style.height = height;
            }, 0);

        });

    });

    if (document.querySelector('.accordion-b2b')) {


        var accordionsB2B = accordions({
            accordion: '.accordion-b2b',
            accordionItemTitle: '.accordions-item__title',
            accordionItemSlide: '.accordions-item__slide',
        });

        accordionsB2B.init();

    }


    // About Events ---------------------------------------------------

    if (document.querySelector('.tabs-wrap[data-tab="abouthp_tabs"]')) {

        var tabsAboutHp = tabs({
            el: '.tabs-wrap[data-tab="abouthp_tabs"]',
            tabNavigationLinks: '.tab-btn',
            tabContentContainers: '.tab-content'
        });

        tabsAboutHp.init();

    };

    if (document.querySelector('.tabs-wrap[data-tab="abouthp_tabs"]')) {

        var tabsAboutHp = tabs({
            el: '.tabs-wrap[data-tab="abouthp_tabs"]',
            tabNavigationLinks: '.tab-btn',
            tabContentContainers: '.tab-content'
        });

        tabsAboutHp.init();

    };

    // Kitchen Events ---------------------------------------------------

    const swiperKitchenProduct = new Swiper('.kitchen__product-slider', {
        spaceBetween: 30,
        slidesPerGroup: 1,
        speed: 500,
        pagination: {
            el: ".kitchen__product-slider .swiper-pagination, .kitchen__product-slider .swiper-pagination-hover",
            clickable: true,
        },
    });

    const swiperKitchenSlCatalog = new Swiper('.kitchen__slider-catalog', {
        spaceBetween: 30,
        slidesPerView: "auto",
        slidesPerGroup: 1,
        speed: 500,
    });

    document.querySelectorAll('.kitchen__product-slider').forEach(function(slider, index) {
        var indexSlide = index;
        slider.querySelectorAll('.swiper-pagination-hover .swiper-pagination-bullet').forEach(function(bullet, index) {

            bullet.addEventListener('mouseover', function(event) {
                event.preventDefault();
                swiperKitchenProduct[indexSlide].slideTo(index);
            });

        });
    });


    let kitchenProduct = document.querySelectorAll('.kitchen__product');

    kitchenProduct.forEach(function(product, index) {
        product.addEventListener('click', function(event) {
            body.classList.add('noscroll');
            modalOverlay.classList.add('show-overlay');
            document.querySelector('.kitchen__product_modal').classList.add('show-modal');

        });
    });


    if(document.querySelectorAll('.kitchen-collection__tabs .tab-btn')){
        document.querySelectorAll('.kitchen-collection__tabs .tab-btn').forEach(function(tab, index) {
            tab.addEventListener('mouseenter', function(event) {
                console.log(index);
                document.querySelectorAll('.kitchen-collection__tabscontent .kitchen-collection__item').forEach(i => i.classList.remove('show-tabcontent'));
                document.querySelector(`.kitchen-collection__tabscontent .kitchen-collection__item:nth-of-type(${index + 1})`).classList.add('show-tabcontent');
            });
        });
        

    };
   

}, 350);