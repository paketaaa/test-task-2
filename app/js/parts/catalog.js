setTimeout(function() {

    let body = document.querySelector('body'),
        modalOverlay = document.querySelector('.modal__overlay');

    // Slider Init ------------------------------------

    var swiperCatCategoryesOptions = {
        spaceBetween: 20,
        slidesPerView: "auto",
        speed: 500,
        freeMode: true,
        navigation: {
            prevEl: '.catcategoryes__slider .slider-btn-prev',
            nextEl: '.catcategoryes__slider .slider-btn-next',
        },
        scrollbar: {
            el: ".catcategoryes__slider .swiper-scrollbar",
        },
        breakpoints: {
            320: {
                slidesPerGroup: 1,
                slidesPerView: "auto",
                freeMode: true,
            },
            768: {
                slidesPerGroup: 1,
                slidesPerView: "auto",
                freeMode: true,
            },
            1200: {
                freeMode: false,
                slidesPerGroup: 2,
            }
        }
    };

    const swiperCatCategoryes = new Swiper('.catcategoryes__slider', swiperCatCategoryesOptions);

    const swiperItemProduct = new Swiper('.product__item-slider', {
        spaceBetween: 20,
        slidesPerView: "auto",
        slidesPerGroup: 1,
        speed: 500,
        navigation: {
            prevEl: '.product__item-slider .slider-btn-prev',
            nextEl: '.product__item-slider .slider-btn-next',
        },
        scrollbar: {
            el: ".product__item-slider .swiper-scrollbar",
        },
        breakpoints: {
            768: {
                slidesPerGroup: 1,
                slidesPerView: "auto",
                freeMode: true,
            },
            1200: {
                slidesPerGroup: 2,
                freeMode: false,
            }
        }
    });

    const swiperViewedslider = new Swiper('.catalog__viewedslider', {
        spaceBetween: 20,
        slidesPerView: "auto",
        slidesPerGroup: 1,
        speed: 500,
        freeMode: true,
        scrollbar: {
            el: ".catalog__viewedslider .swiper-scrollbar",
        },
        breakpoints: {
            768: {
                slidesPerGroup: 1,
                slidesPerView: "auto",
                freeMode: true,
            },
            991: {
                slidesPerGroup: 2,
                freeMode: true,
            },
            1200: {
                slidesPerGroup: 2,
                freeMode: false,
            }
        }
    });

    const swiperRoomslider = new Swiper('.rooms__item-slider', {
        spaceBetween: 60,
        slidesPerView: "auto",
        slidesPerGroup: 1,
        speed: 500,
        freeMode: true,
        breakpoints: {
            768: {
                slidesPerGroup: 1,
                slidesPerView: "auto",
                freeMode: true,
            },
            991: {
                slidesPerGroup: 2,
                freeMode: true,
            },
            1200: {
                slidesPerGroup: 2,
                freeMode: false,
            }
        }
    });


    var ProductSlider = new Swiper('.product-detail__bigslider', {
        spaceBetween: 0,
        slidesPerGroup: 1,
        speed: 500,
        pagination: {
            el: ".product-detail__bigslider .swiper-pagination",
            clickable: true,
        },
        on: {
            slideChange: function() {
                document.querySelectorAll('.product-detail__navbigslider .swiper-slide').forEach(i => i.classList.remove('active-nav'));
                var index = ProductSlider.activeIndex + 1;
                document.querySelector(`.product-detail__navbigslider .swiper-slide:nth-of-type(${index})`).classList.add('active-nav');
            }
        }

    });

    var ProductSliderNav = new Swiper('.product-detail__navbigslider', {
        spaceBetween: 5,
        slidesPerView: "auto",
        slidesPerGroup: 2,
        speed: 500,
        navigation: {
            prevEl: '.product-detail__navbigslider .slider-btn-prev',
            nextEl: '.product-detail__navbigslider .slider-btn-next',
        },
    });

    document.querySelectorAll('.product-detail__navbigslider .swiper-slide').forEach(function(slide, index) {
        slide.addEventListener('click', function(e) {
            document.querySelectorAll('.product-detail__navbigslider .swiper-slide').forEach(i => i.classList.remove('active-nav'));
            slide.classList.add('active-nav');
            if (slide.classList.contains('active-nav')) {
                var indexSlide = parseInt(index);
                ProductSlider.slideTo(indexSlide, 500);
            }

        });
    });

    // Tabs Init ----------------------------------


    function InitTabsCategoryInHP() {
        if (document.querySelector('.tabs-wrap[data-tab="catalog"]')) {
            var tabsCategoryTitle = tabs({
                el: '.tabs-wrap[data-tab="catalog"]',
                tabNavigationLinks: '.tab-btn',
                tabContentContainers: '.tab-content'
            });

            tabsCategoryTitle.init();
            document.querySelector('.tabs-wrap[data-tab="catalog"] .tab-nav').addEventListener('click', function(event) {
               document.querySelectorAll('.catcategoryes__slider').forEach(function(slide, index) {
                    slide = new Swiper(`.catcategoryes__slider:nth-of-type(${index + 1})`, swiperCatCategoryesOptions);
                });
            });
        };
    }

    InitTabsCategoryInHP();

    document.querySelectorAll('.product__item-favorite').forEach(function(btnfavorite, index) {
        btnfavorite.addEventListener('click', function(e) {
            this.classList.toggle('icon-heart-fill');
        });
    });

    if (document.querySelector('.product-detail__tabs')) {

        var tabsCategoryTitle = tabs({
            el: '.product-detail__tabs',
            tabNavigationLinks: '.tab-btn',
            tabContentContainers: '.tab-content'
        });

        tabsCategoryTitle.init();
    }

    // Modal&Filter ----------------------------------------

    if (document.querySelector('.catcategoryes__show-inmodal')) {
        document.querySelector('.catcategoryes__show-inmodal').addEventListener('click', function(e) {
            document.querySelector('.catcategoryes__modal').classList.add('show-modal');
            modalOverlay.classList.add('show-overlay');
            body.classList.add('noscroll');
        });

    }


    if (document.querySelector('.filter__selectprops-wrap')) {
        var filterSelectProps = accordions({
            accordion: '.filter__selectprops-wrap',
            accordionItemTitle: '.accordions-item__title',
            accordionItemSlide: '.accordions-item__slide',
        });
        filterSelectProps.init();
    }

    if (document.querySelectorAll('.filter__rangeslider')) {

        document.querySelectorAll('.filter__rangeslider').forEach(function(rangeslider, index) {

            const rangesliderInput = rangeslider.querySelector('.filter__rangeslider-input');
            const myRangeSlider = ionRangeSlider(rangesliderInput, {
                onChange: function(data) {
                    rangeslider.querySelector('.filter__rangeslider-min span').textContent = data.from;
                    rangeslider.querySelector('.filter__rangeslider-max span').textContent = data.to;
                }
            });

        });

        if (document.querySelector('.filter__btnshow')) {
            document.querySelector('.filter__btnshow').addEventListener('click', e => {
                modalOverlay.classList.add('show-overlay');
                body.classList.add('noscroll');
                document.querySelector('.filter__modal').classList.add('show-modal');
            });
        }
    }


    // ProductDetail ----------------------------------------

    if (document.querySelector('.product-detail__availableshow')) {
        document.querySelector('.product-detail__availableshow').addEventListener('click', function(e) {
            document.querySelector('.product__available-modal').classList.add('show-modal');
            modalOverlay.classList.add('show-overlay');
            body.classList.add('noscroll');
        });
    }

    if (document.querySelector('.product__item-colors')) {
        document.querySelectorAll('.product__item-colors').forEach(function(colors, index) {
            colors.querySelectorAll('.color').forEach(function(radiocolor, index) {
                radiocolor.addEventListener('click', function(e) {
                    colors.querySelectorAll('.color').forEach(i => i.classList.remove('active-color'));
                    radiocolor.classList.add('active-color');
                });
            });
        });
    }

    // Cart ----------------------------------------

    if (document.querySelector('.cart__sidebar-promocod')) {

        document.querySelector('.cart__sidebar-promocod_submit').addEventListener('click', function(e) {
            if (document.querySelector('.cart__sidebar-promocod .input').value.length > 0) {
                document.querySelector('.cart__sidebar-promocod_submit').style.display = 'none';
                document.querySelector('.cart__sidebar-promocod_clear').style.display = 'block';
            }

        });
        document.querySelector('.cart__sidebar-promocod_clear').addEventListener('click', function(e) {
            document.querySelector('.cart__sidebar-promocod_clear').style.display = 'none';
            document.querySelector('.cart__sidebar-promocod_submit').style.display = 'block';
            document.querySelector('.cart__sidebar-promocod .input').value = '';
        });
    }

    // Update AfterRouting ----------------------------------------

    document.querySelectorAll('a').forEach(function(linkRouter, index) {
        linkRouter.addEventListener('click', function() {

            var linkHref = linkRouter.getAttribute("href");
            if (linkHref && linkHref.length !== '') {
                setTimeout(InitTabsCategoryInHP, 500);

            }
        });
    });

}, 350);