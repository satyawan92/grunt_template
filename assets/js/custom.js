var winWidth,
    winHeight;


function set_background() {
    $('.set-bg').each(function() {
        if (typeof $(this).attr('data-mob-img') === 'undefined') {
            $(this).css({
                'background': 'url(' + $(this).attr('data-img') + ')',
                'background-size': 'cover'
            });
        } else {
            if (winWidth > mobile_breakbpoint) {
                if (typeof $(this).attr('data-img') != 'undefined') {
                    $(this).css({
                        'background': 'url(' + $(this).attr('data-img') + ')',
                        'background-size': 'cover'
                    });
                }
            } else {
                $(this).css({
                    'background': 'url(' + $(this).attr('data-mob-img') + ')',
                    'background-size': 'cover'
                });
            }
        }
    });
}



function stickyMenu() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 60) {
            $('.bs-header').addClass("sticky");
        } else {
            $('.bs-header').removeClass("sticky");
        }
    });
}






function get_height_width() {
    winWidth = $(window).width(),
        winHeight = $(window).height();
}

function set_height_width() {
    if ($('body').height() < winHeight) {
        $('.wh').outerHeight(winHeight);
    }
    $('.wh-min').css('min-height', winHeight);
    $('.ww').outerWidth(winWidth);
}




// function webcounters() {

//     const animationDuration = 3000;

//     const frameDuration = 1000 / 60;

//     const totalFrames = Math.round(animationDuration / frameDuration);

//     const easeOutQuad = t => t * (2 - t);

//     const animateCountUp = el => {
//         let frame = 0;
//         const countTo = parseInt(el.innerHTML, 10);

//         const counter = setInterval(() => {
//             frame++;

//             const progress = easeOutQuad(frame / totalFrames);

//             const currentCount = Math.round(countTo * progress);


//             if (parseInt(el.innerHTML, 10) !== currentCount) {
//                 el.innerHTML = currentCount;
//             }

//             if (frame === totalFrames) {
//                 clearInterval(counter);
//             }
//         }, frameDuration);
//     };

//     const countupEls = document.querySelectorAll('.timer');
//     countupEls.forEach(animateCountUp);

// }

function swiper_call(element, slidesperview, rsslidesperview, direction) {
    var swiper = new Swiper(element, {
        slidesPerView: slidesperview,
        spaceBetween: 15,
        direction: direction,
        pagination: {
            el: '.product-pagination',
            clickable: true,

        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: false,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            768: {
                slidesPerView: rsslidesperview,
                spaceBetween: 10,

            }

        }
    });
}


function menuActive() {
    var m = $('.bs-header').attr('data-nav').toLowerCase();
    $('.main-nav li a').each(function(index) {
        if ($(this).html().toLowerCase() == m) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
}



$(function() {
    get_height_width();
    set_height_width();
    set_background();
    // menuActive();
    // swiper_call('.horizontal-swiper', 4, 1, 'horizontal');
    // webcounters();
    //stickyMenu();








});





















// function accordian() {
//     $('.bs-accordian .accordian-heading').on('click', function() {
//         if (!$(this).hasClass('active')) {
//             $(this).parents('.bs-accordian').find('.accordian-content').removeClass('active').slideUp();
//             $(this).parents('.bs-accordian').find('.accordian-heading').removeClass('active');
//             $(this).siblings('.accordian-content').addClass('active').slideDown();
//             $(this).addClass('active');
//         } else {
//             $(this).siblings('.accordian-content').removeClass('active').slideUp();
//             $(this).removeClass('active');

//         }
//     });

//     $('.bs-accordian').each(function(index) {
//         $(this).find('.accordian-content.active').slideDown();
//     });
// }

// function chart() {
//     var ctx = $("#myChart");
//     var icon = new Image();
//     icon.src = 'http://fractalink.com/works/wift-desk/assets/images/pointer.png';
//     var myLineChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050, 2100, 2150],
//             datasets: [{
//                 data: [2800, 2200, 1000, 810, 203, 221, 800, 1900, 107, 510, 133, 221],
//                 label: "Africa",
//                 borderColor: 'rgba(256,256,256,0.6)',
//                 borderWidth: 3,
//                 fill: false,
//                 pointStyle: [, , , icon, , , , , , , , ],
//                 radius: [0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0],
//                 backgroundColor: 'rgba(0,202,157,0.9)',
//                 // borderJoinStyle: 'bevel'
//             }],

//         },
//         options: {
//             legend: {
//                 display: false,
//             },
//             scales: {
//                 xAxes: [{
//                     display: false,
//                     gridLines: {
//                         display: false,
//                     },
//                     ticks: {
//                         fontSize: 15,
//                         fontColor: 'lightgrey'
//                     }
//                 }],
//                 yAxes: [{
//                     display: false,
//                     gridLines: {
//                         drawBorder: false,
//                         display: false
//                     },
//                     ticks: {
//                         beginAtZero: true,
//                         fontSize: 15,
//                         fontColor: 'lightgrey',
//                         maxTicksLimit: 5,
//                         padding: 25,
//                     }
//                 }]
//             },
//             tooltips: {
//                 backgroundColor: '#1e90ff'
//             },
//             points: {
//                 radius: 10,

//             }
//         },
//     });
//     // ctx.width('100%');
//     ctx.height(230);
// }

// function dropdown() {
//     $('.bs-dropdown .target-element').on('click', function(e) {
//         e.stopPropagation();
//         $('.target-content,.target-element').removeClass('active');
//         $(this).siblings('.target-content').addClass('active');
//         $(this).addClass('active');
//     });
//     $('.target-content').on('click', function(e) {
//         e.stopPropagation();
//     });
// }

// function tabsSwiper() {
//     var tabsSlider = new Swiper('.tabs-swiper', {
//         slidesPerView: 3,
//         // spaceBetween: 50,
//         slidesPerColumn: 1,
//         nextButton: '.lyt-chats .swiper-button-next',
//         prevButton: '.lyt-chats .swiper-button-prev',
//     });
// }

// function filter() {
//     $('.bs-filter .filter-btn').on('click', function() {
//         $('.bs-filter .filter-content').addClass('active');
//         $('.overlay').fadeIn(350);
//     });
//     $('.overlay').on('click', function() {
//         $('.overlay').fadeOut(350);
//         $('.bs-filter .filter-content').removeClass('active');
//     });
//     $('.filter-content ul li a').on('click', function(e) {
//         e.preventDefault();
//         $('.filter-content ul li').removeClass('active');
//         $(this).parent().addClass('active');
//         $('.bs-filter .filter-btn').html($(this).html() + "<span class='icon icon-filter'></span>");
//         $('.overlay').click();
//     });
// }

// function rangeSlider() {
//     var slider = document.getElementById('range-slider');
//     noUiSlider.create(slider, {
//         start: 40,
//         connect: [true, false],
//         range: {
//             'min': 0,
//             'max': 100
//         }
//     });

//     slider.noUiSlider.on('update', function(values) {
//         $('.radius').html(parseInt(values) + ' km');
//     });
// }

// function selectbox() {
//     $(".role-title").select2();
// }



// function otp() {
//     $('.input-group.typ-otp .form-control').on('keypress', function(evt) {
//         evt = (evt) ? evt : window.event;
//         var charCode = (evt.which) ? evt.which : evt.keyCode;
//         console.log(charCode);
//         if (charCode > 31 && (charCode < 48 || charCode > 57)) {
//             return false;
//         } else {
//             $(this).next().focus();
//         }
//         return true;
//     });
// }

// function postaction() {
//     $('.lyt-my-postings .mod-profile-action .like').on('click', function(e) {
//         e.preventDefault();
//         $('.overlay').fadeIn();
//         $('.modal.typ-congo').fadeIn();
//     });

//     $('.edit-option').on('click', function(e) {
//         e.preventDefault();
//         $('.overlay').fadeIn();
//         $('.modal.typ-edit').fadeIn();
//     });

//     $('.clone').on('click', function(e) {
//         e.preventDefault();
//         $('.overlay').fadeIn();
//         $('.modal.typ-clone').fadeIn();
//     });

//     $('.lyt-my-postings .mod-info-icon').on('click', function() {
//         if ($(this).hasClass('active')) {
//             $(this).removeClass('active');
//         } else {
//             $(this).parents('li.list-item').siblings('li').find('.mod-info-icon').removeClass('active');
//             $(this).addClass('active');
//         }
//     });

// }

// function editMobile() {
//     $('.edit-mobile').on('click', function() {
//         // if (!$(this).siblings('.mobile-inpt').hasClass('active')) {
//         //     $(this).hide();
//         //     $(this).siblings('.save-mobile').fadeIn();
//         //     $(this).siblings('.mobile-inpt').addClass('active').attr('readonly', false).focus();
//         // }
//         $(this).parents('.bs-card').hide();
//         $('.bs-card.typ-chng-no').fadeIn().find('.form-wrap.typ-otp').hide().siblings('.form-wrap').fadeIn();
//     });
//     $('.save-mobile').on('click', function(e) {
//         e.preventDefault();
//         $(this).siblings('.edit-mobile').fadeIn();
//         $(this).siblings('.mobile-inpt').removeClass('active').attr('readonly', true);
//         $(this).hide();
//     });
//     $('.link-dnt-chng').on('click', function(e) {
//         e.preventDefault();
//         $(this).parents('.bs-card').hide().siblings('.bs-card').fadeIn();
//     });
//     $('.link-renter-no').on('click', function(e) {
//         e.preventDefault();
//         $(this).parents('.form-wrap').hide().siblings('.form-wrap').fadeIn();
//     });
//     $('.btn-proceed-to-otp').on('click', function(e) {
//         e.preventDefault();
//         $(this).parents('.form-wrap').hide().siblings('.form-wrap').fadeIn();
//     });

// }

// function dashboardSwiper() {
//     var dashSwiper = new Swiper('.dashboard-swiper', {
//         slidesPerView: "auto",
//         spaceBetween: 10,
//         centeredSlides: true,
//         initialSlide: 2,
//         nextButton: '.swiper-button-next',
//         prevButton: '.swiper-button-prev',
//         // onInit: function() {
//         //     var nextIndex = $('.dashboard-swiper').find('.swiper-slide-next').index() + 2;
//         //     var prevIndex = $('.dashboard-swiper').find('.swiper-slide-prev').index();
//         //     $('.dashboard-swiper').find('.swiper-slide:nth-child(' + nextIndex + ')').addClass('swiper-slide-next-plus');
//         //     $('.dashboard-swiper').find('.swiper-slide:nth-child(' + prevIndex + ')').addClass('swiper-slide-next-plus');
//         // }
//     });

//     // dashSwiper.on('onTransitionStart', function(e) {
//     //     var that = $('.dashboard-swiper').find('.swiper-slide-active');
//     //     var nextIndex = $('.dashboard-swiper').find('.swiper-slide-next').index() + 2;
//     //     var prevIndex = $('.dashboard-swiper').find('.swiper-slide-prev').index();
//     //     $('.dashboard-swiper').find('.swiper-slide:nth-child(' + nextIndex + ')').addClass('swiper-slide-next-plus');
//     //     $('.dashboard-swiper').find('.swiper-slide:nth-child(' + prevIndex + ')').addClass('swiper-slide-next-plus');
//     // });
// }


// function readmore() {
//     // Configure/customize these variables.
//     var showChar = 150; // How many characters are shown by default
//     var ellipsestext = "...";
//     var moretext = "Read more";
//     var lesstext = "Read less";


//     $('.more').each(function() {
//         var content = $(this).html();

//         if (content.length > showChar) {

//             var c = content.substr(0, showChar);
//             var h = content.substr(showChar, content.length - showChar);

//             var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

//             $(this).html(html);
//         }

//     });

//     $(".morelink").click(function() {
//         if ($(this).hasClass("less")) {
//             $(this).removeClass("less");
//             $(this).html(moretext);
//         } else {
//             $(this).addClass("less");
//             $(this).html(lesstext);
//         }
//         $(this).parent().prev().toggle();
//         $(this).prev().toggle();
//         return false;
//     });
// }

// function for notification scroll window
// function notificationScroll() {
//     $('.bs-card.typ-notification').scroll(function() {
//         console.log('its scrolling...');
//     });
// }

// function mypostSwiper() {
//     var dashSwiper = new Swiper('.my-post-swiper', {
//         slidesPerView: "auto",
//         spaceBetween: 10,
//         centeredSlides: true,
//         initialSlide: 2,
//         nextButton: '.swiper-button-next',
//         prevButton: '.swiper-button-prev',
//     });

//     dashSwiper.on('onSlideNextStart', function(e) {
//         $('.post-list-wrap .accordian-content.active li.active').removeClass('active').next().addClass('active');
//         var offCalc = $('.post-list-wrap .bs-accordian').scrollTop() - $('.post-list-wrap .bs-accordian').position().top + $('.post-list-wrap .accordian-content.active li.active').position().top;
//         $('.post-list-wrap .bs-accordian').animate({
//             scrollTop: offCalc
//         }, 500);
//     });

//     dashSwiper.on('onSlidePrevStart', function(e) {
//         $('.post-list-wrap .accordian-content.active li.active').removeClass('active').prev().addClass('active');
//         var offCalc = $('.post-list-wrap .bs-accordian').scrollTop() - $('.post-list-wrap .bs-accordian').position().top + $('.post-list-wrap .accordian-content.active li.active').position().top;
//         console.log(offCalc);
//         $('.post-list-wrap .bs-accordian').animate({
//             scrollTop: offCalc
//         }, 500);
//     });

//     $('.lyt-my-postings .bs-accordian .accordian-heading').on('click', function() {
//         if ($(this).siblings('.accordian-content').find('.post-report').hasClass('no-users')) {
//             $('.my-post-swiper').hide().siblings('.swiper-button-prev,.swiper-button-next').hide();
//             $('.lyt-my-postings .lyt-empty').fadeIn();
//         } else {
//             $('.lyt-my-postings .lyt-empty').hide();
//             $('.my-post-swiper').fadeIn().siblings('.swiper-button-prev,.swiper-button-next').fadeIn();
//         }
//     });
// }

