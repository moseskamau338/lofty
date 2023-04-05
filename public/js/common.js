/*Global variables*/
"use strict";
/*===> Is mobile function <===*/
function isMobileDeviceUsed() {
    var isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;
    return isMobile;
}


/*===> Slider init <===*/
function sliderInit(){
    $('#classes-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              }
            },
        ]
    });

    $("#event-slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
              }
            },
        ]
    })

    $('#testimonial-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            },
        ]
    })

    $('#team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            },
        ]
    })



    $('#home-slider').on('init', function(event, slick){
        $('#home-slider .slick-active .inner-home-slider').addClass('animate-slide');
    });

    $('#home-slider').slick({
        dots: true,
        prevArrow: '.home-slider-wrap .slider-arrow.arrow-left',
        nextArrow: '.home-slider-wrap .slider-arrow.arrow-right',
        responsive: [
            {
              breakpoint: 700,
              settings: {
                arrows: false,
              }
            },
        ]
    })

    $('#home-slider').on('afterChange', function(event, slick, currentSlide){
        $('#home-slider .slick-slide .inner-home-slider').removeClass('animate-slide');
        $('#home-slider .slick-active .inner-home-slider').addClass('animate-slide');
    });



    $('#second-testimonial').slick({
        infinite: false,
        dots: true,
        arrows: false,
    })

    $('#blog-slider-1').slick({})
}

/*===> Mobile nav <===*/
function mobileNav(){
    $('.wrap-to-show i').on('click', function(){
        var dedBlock = $(this).closest('.wrap-to-show');
        if(dedBlock.next("ul").is(":visible")){
            dedBlock.next("ul").slideUp();
            dedBlock.removeClass('show-mob-nav');
        } else {
            dedBlock.next("ul").slideToggle();
            dedBlock.addClass('show-mob-nav');
        }
    })

    $('.humburger').on('click', function(){
        $('.header-nav').addClass('show-header-nav');
        $('.fade-bg').addClass('fade-true');
        $('html').css({
            'overflow' : 'hidden',
        });
    })

    $('.close-menu').on('click', function(){
        $('.header-nav').removeClass('show-header-nav');
        $('.fade-bg').removeClass('fade-true');
        $('html').css({
            'overflow' : 'visible',
        });
    })

    $('.fade-bg').on('click', function(){
        $('.header-nav').removeClass('show-header-nav');
        $('.fade-bg').removeClass('fade-true');
        $('html').css({
            'overflow' : 'visible',
        });
    })
}

/*===> MOBILE SEARCH <===*/
function mobileSearch(){
    $('.show-search').on('click', function(){
        $('.search-overlay-wrap').addClass('show-search-overlay');
        $('.search-overlay input').focus();
        $('html').css({
            'overflow' : 'hidden',
        });
    })

    $('.close-search-overlay').on('click', function(){
        $('.search-overlay-wrap').removeClass('show-search-overlay');
        $('.search-overlay').trigger('reset');
        $('html').css({
            'overflow' : 'visible',
        });
    })
}

/*===> Scroll animate <===*/
function animateScroll(){
    var attr = $('*').attr('data-animation-section');
    if (typeof attr !== typeof undefined && attr !== false) {
        $(window).on('scroll', function(){
            var winScroll = $(window).scrollTop();
            $('*[data-animation-section]').each(function(){
                var ofsetBlock = $(this).offset().top;
                var blockHeight = $(this).outerHeight(false);
                var winHeight = $(window).height();
                var addedClass = $(this).find('*[data-animation-block]').attr('data-animation-block');
                if (winScroll > ofsetBlock - winHeight * 0.8) {
                    $(this).find('*[data-animation-block]').addClass(addedClass);
                }
            })
        })
    }
}

/*===> Progress animate <===*/
function progressAnimation(){
    var flag = true;
    var blockToScroll = $('*').hasClass('progress-wrap');
    if (blockToScroll) {
        $(window).on('scroll', function(){
            var winScroll = $(window).scrollTop();
            var winHeight = $(window).height();
            $('.progress-wrap').each(function(){
                var ofsetBlock = $(this).offset().top;
                if (winScroll > ofsetBlock - winHeight * 0.8 && flag){
                    var blokAnim = $(this).find('.progress-line');
                    var percent = blokAnim.attr('data-value');
                    blokAnim.css({
                        'width' : percent + '%',
                    })
                }
            })
        })
    }
}

/*===> Timer <===*/
function makeTimer() {

    var endTime = new Date("december 30, 2018 12:00:00 PDT");
    var endTime = (Date.parse(endTime)) / 1000;

    var now = new Date();
    var now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<span><br></span>");
    $("#hours").html(hours + "<span><br></span>");
    $("#minutes").html(minutes + "<span><br></span>");
    $("#seconds").html(seconds + "<span><br></span>");
}
setInterval(function() { makeTimer(); }, 1000);

/*===> Chart <===*/
function chartInit(){
    $('.chart').easyPieChart({
        trackColor :'#e8e8e8',
        barColor : '#5dba3b',
        size: 260,
        lineWidth: 13,
        scaleColor: 'transparent',
        animate: 2500,
        easing: "ease-in",
    });

    if ($('.chart').hasClass('color-1')) {
        $('.chart.color-1').data('easyPieChart').options.barColor = '#5255c5';
    } 

    if ($('.chart').hasClass('color-2')) {
        $('.chart.color-2').data('easyPieChart').options.barColor = '#5dba3b';
    } 

    if ($('.chart').hasClass('color-3')) {
        $('.chart.color-3').data('easyPieChart').options.barColor = '#ff8b00';
    } 

    if ($('.chart').hasClass('color-4')) {
        $('.chart.color-4').data('easyPieChart').options.barColor = '#ff5157';
    }

    if ($('.chart').hasClass('color-5')) {
        $('.chart.color-5').data('easyPieChart').options.barColor = '#ffc000';
    }

    $('.chart').each(function(){
        var percent = $(this).attr('data-percent');
        var blockPerc = $(this).closest('.pie-wrap').find('.percent span').html(percent);
        $(this).closest('.pie-wrap').find('.percent span').html(percent);
    })         
}

function chartAnimate(){
    var flag = true;
    var blockToScroll = $('*').hasClass('pie-wrap');
    if (blockToScroll) {
        $(window).on('scroll', function(){
            var winScroll = $(window).scrollTop();
            var ofsetBlock = $('.pie-wrap').offset().top,
                winHeight = $(window).height();
            if (winScroll > ofsetBlock - winHeight * 0.8 && flag){
                flag = false;
                $('.chart').each(function(){
                    var percent = $(this).attr('data-percent-end');
                    var blockPerc = $(this).closest('.pie-wrap').find('.percent span').html(percent);
                    $(this).data('easyPieChart').update(percent);
                    $({numberValue: 0}).animate({numberValue: percent}, { 
                        duration: 2500, // The animation speed, where 500 is 0.5 one second, that is, 500 milliseconds
                        easing: "linear", 
                        step: function(val) {  
                            blockPerc.html(Math.ceil(val)); // Block where you want to do the animation
                        } 
                    });
                })
            }
        })
    }
}

/*===> Move element <===*/
function moveElement() {
    $('[data-parent-move]').each(function() {
        var $this = $(this),
            object = $(this).find('[data-move]'),
            valueX,
            valueY,
            posX,
            posY;

        $(this).on('mouseenter', function(){
            $(this).find('[data-move]').each(function(){
                posX = parseInt($(this).css('left'),10);
                posY = parseInt($(this).css('top'),10);
                moveOnBoard($(this), posX, posY);
            })
        })

        function moveOnBoard($this2, posX, posY){
            $this.on('mousemove', function(e){
                if(e.target.closest('[data-parent-move]')){
                  var target = e.target.closest('[data-parent-move]');
                  var targetCoords = target.getBoundingClientRect();
                  var xCoord = e.clientX - targetCoords.left;
                  var yCoord = e.clientY - targetCoords.top;
                  if ($this2.attr('data-move') == 'plus') {
                      valueX = (e.pageX * -1 / $this2.attr('data-move-speed'));
                      valueY = (yCoord * -1 / $this2.attr('data-move-speed'));
                      moveSide($this2, valueX, valueY, posX, posY);
                  } else {
                      valueX = (e.pageX * 1 / $this2.attr('data-move-speed'));
                      valueY = (yCoord * 1 / $this2.attr('data-move-speed'));
                      moveSide($this2, valueX, valueY, posX, posY);
                  }
                }
            })
        }
    })
}

function moveSide(object, valueX, valueY, posX, posY){
    object.css({
        'transform'  : 'translate(' + valueX + 'px,' + (valueY) + 'px)',
        'transition' : 'all .2s',
        'transition-timing-function' : 'ease-out'
    })
}

/*===> Parallax img <===*/
function scrollParallax() {
    var blockToScroll = $('*').hasClass('parallax-img');
    if (blockToScroll) {
        $('.parallax-img').each(function(){
            $(this).parent().css({
                'overflow-x' : 'hidden'
            })
            var $target = $(this),
                currentPosition = parseInt($target.css("transform").split(",")[4]),
                posY = $(this).offset().top,
                winHeight = $(window).height(),
                moveBy = function(scrolledBy) {
                    currentPosition += scrolledBy;
                    $target.css("transform", "translateX(" + (currentPosition + posY - winHeight)/2 + "px)")
                },
                lastScrollTop = 0;

            currentPosition = isNaN(currentPosition) ? 0 : currentPosition;
            $(window).on("scroll", function(e) {
                var scrolledBy = $(window).scrollTop() - lastScrollTop;
                moveBy(-scrolledBy);
                lastScrollTop = $(window).scrollTop();
            });
        })
    }  
}

/*===> Count skill number <===*/
function animateCoutt() {
    var flag = true;
    var blockToScroll = $('*').hasClass('skills-section');
    if (blockToScroll) {
        $(window).on('scroll', function() {
            var winScroll = $(window).scrollTop();
            var ofsetBlock = $('.skills-section').offset().top,
                winHeight = $(window).height(),
                addedClass = 'show-count';

            if (winScroll > ofsetBlock - winHeight * 0.8 && flag) {
                flag = false;
                $('.skills-section [data-skill]').each(function() {
                    var number = $(this).attr('data-skill'),
                        block = $(this).find('.skill-number');
                    $(this).addClass(addedClass);

                    $({numberValue: 0}).animate({numberValue: number}, { 
                        duration: 2500, // The animation speed, where 500 is 0.5 one second, that is, 500 milliseconds
                        easing: "linear", 
                        step: function(val) {  
                            block.html(Math.ceil(val)); // Block where you want to do the animation
                        } 
                    });
                })
            }
        })
    }
}

/*===> Custom select <===*/
function customSelect(){
    $('select').select2({
        width: "100%",
        templateResult: addUserPic,
        templateSelection: addUserPic
    });
    
    $('b[role="presentation"]').hide();
    $('.select2-selection__arrow').append('<i class="mdi mdi-chevron-down"></i>');

    function addUserPic (opt) {
        if (!opt.id) {
            return opt.text;
        }               
        var optimage = $(opt.element).data('icon'); 
        if(!optimage){
            return opt.text;
        } else {
            var $opt = $(
                "<span><i class='mdi " + optimage + "'></i>" + $(opt.element).text() + '</span>'

            );
            return $opt;
        }
    };
}

/*===> Custom select <===*/
function dataPick(){
    /*INPUT DATA*/
    $('.choose-data').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 2017,
      maxYear: 2020,
      locale: {
        format: 'DD.MM.YYYY'
      }
    });
    $('.choose-data').val('Date');
}

/*===> Map init <===*/
function initMap() {
    var element, myMap, element2, myMap2, element3, myMap3;
    
    if ($("*").is("#map")) {
        element = document.getElementById('map');
    }

    if ($("*").is("#location-map")) {
        element2 = document.getElementById('location-map');
    }

    if ($("*").is("#footer-map")) {
        element3 = document.getElementById('footer-map');
    }
    
    var options = {
        zoom: 17,
        center: {lat: -1.252813, lng: 36.684769},
        styles: [{"featureType": "water", "elementType": "all", "stylers": [{"hue": "#7fc8ed"}, {"saturation": 55 }, {"lightness": -6 }, {"visibility": "on"} ]}]
    }
// -1.251561,36.686636
    if ($("*").is("#location-map")) {
        myMap2 = new google.maps.Map(element2, options);
        var markers = [{
                coordinates: {lat: -1.252813, lng: 36.684769},
                myMap: myMap2,
                iconImg: '../img/map-marker.png'
            }
        ]
        for (var i = 0; i < markers.length; i++) {
            addMarker(markers[i]);
        }
    }

    if ($("*").is("#map")) {
        myMap = new google.maps.Map(element, options);
        var markers = [{
                coordinates: {lat: -1.252813, lng: 36.684769},
                myMap: myMap,
                iconImg: '../img/map-marker.png'
            }
        ]
        for (var i = 0; i < markers.length; i++) {
            addMarker(markers[i]);
        }
    }

    if ($("*").is("#footer-map")) {
        myMap3 = new google.maps.Map(element3, options);
        var markers = [{
                coordinates: {lat: -1.252813, lng: 36.684769},
                myMap: myMap3,
                iconImg: '../img/map-marker.png'
            }
        ]
        for (var i = 0; i < markers.length; i++) {
            addMarker(markers[i]);
        }
    }

    function addMarker(properties) {
        var marker = new google.maps.Marker({
            position: properties.coordinates,
            map: properties.myMap,
            icon: properties.iconImg
        });
    }  
}

/*====> BACK TO TOP <====*/
function backTop(){
    var btnTop = $('#toTop'),
        heightBtn = btnTop.outerHeight(true),
        heightWindow = $(window).height();
    $(window).on('scroll', function(){
        if ($(window).scrollTop() >= 400) {
            btnTop.addClass('show_btn');
        } else {
            btnTop.removeClass('show_btn');
        }
    });
    /* scroll top */
    btnTop.on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
}

/*===> featherlight <===*/
function featherlightChange(){
    $('[data-featherlight]').on('click', function(){
        $('.featherlight-close-icon.featherlight-close').html("<i class='mdi mdi-window-close'>");
    })
}

/*====> shadow table <====*/
function tableShadow(){
    if ($('*').hasClass('timetable-body')) {
        var left = $('.timetable-body').offset().left;
        var innerWidth = $('.inner-timetable-wrap').width();
        var innerContentWidth = $('.inner-timetable-wrap .timetable-body').width();
        // var right = $('.timetable-body').offset().right;
        var right = innerContentWidth - innerWidth;

        // console.log(right);

        if (innerWidth+15 < innerContentWidth) {
            $('.right-shadow').addClass('shadow');
        }

        $('.timetable-wrap').on('scroll', function(){
            var $this = $(this);
            left = $('.timetable-body').offset().left;
            // console.log(innerContentWidth-innerWidth-$this.scrollLeft());


            if (left < 15) {
                $('.left-shadow').addClass('shadow');
                // console.log(left);
                if ((15 - left) <= 15) {
                    $('.left-shadow').css({
                        'width' : 15 - left + 'px',
                    })
                }
                
            } else {
                $('.left-shadow').removeClass('shadow');
            }

            if($this.scrollLeft() >= right){
                $('.right-shadow').removeClass('shadow');
            } else {
                var widt = innerContentWidth-innerWidth-$this.scrollLeft();
                $('.right-shadow').addClass('shadow');
                $('.right-shadow').css({
                    'width' : widt + 'px',
                })
                
            }


        })
    }
    
}

function initEvents() {
    /*Actions on 'DOM ready' event*/
    $(function() {
        sliderInit();
        mobileNav();
        mobileSearch();
        animateScroll();
        progressAnimation();
        makeTimer();
        chartInit();
        moveElement();
        scrollParallax();
        animateCoutt();
        chartAnimate();
        customSelect();
        dataPick();
        backTop();
        featherlightChange();
        tableShadow();
    });

    /*Actions on 'Window load' event*/
    $(window).on("load", function() {
        $('.preloader-container').fadeOut(500);
    });
};

/*Start all functions and actions*/
initEvents();

