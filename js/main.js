




$(function(){


    (function(){

        $('.hamburger').click(function(){

           $(this).toggleClass('on');
           $('#mega').toggleClass('on');

        });


        window.addEventListener('wheel',function(e){

            if(e.deltaY < 0){

                $('#header').css('transform','translateY(0)');

            }else {
                $('#header').css('transform','translateY(-100%)');
            }

        });



        $('#section01').addClass('on');




        if (matchMedia('screen and (min-width : 1101px)').matches) {


        function intro(){
            setTimeout(()=>{
                $('#logo').addClass('on');
                setTimeout(()=>{
                    $('#logo').addClass('on2');
                    $('#header').addClass('on');
                    $('#section01 .text_container').addClass('on');
                    $('.scroll').delay(1000).fadeIn();

                    $('#section02').css('display','block');
                    $('#footer').css('display','flex');
                },600)
            },1500);
        }

        intro();

        }





        if (matchMedia('screen and (max-width : 1100px)').matches) {


            function mobileIntro(){
                setTimeout(()=>{
                    $('#logo').addClass('on');

                    setTimeout(()=>{
                        $('#logo').css({
                            opacity:'0',
                            // zIndex:-1,
                        });
                        $('#header').addClass('on');
                        $('#section01 .text_container').addClass('on');
                        $('.scroll').delay(1000).fadeIn();

                        $('#section02').css('display','block');
                        $('#footer').css('display','flex');
                    },600)
                },1500);
            }

            mobileIntro();



        }


        $('.image').click(function (e) {
            e.preventDefault();

            $('#pop').addClass('active');


            if($(this).attr('data-title') === 'img01'){
                $('#pop_slider .slick-dots > li:nth-child(1)').trigger('click');

            }else if($(this).attr('data-title') === 'img02'){
                $('#pop_slider .slick-dots > li:nth-child(2)').trigger('click');

            }else if($(this).attr('data-title') === 'img03'){
                $('#pop_slider .slick-dots > li:nth-child(3)').trigger('click');

            }else if($(this).attr('data-title') === 'img04'){
                $('#pop_slider .slick-dots > li:nth-child(4)').trigger('click');

            }else if($(this).attr('data-title') === 'img05'){
                $('#pop_slider .slick-dots > li:nth-child(5)').trigger('click');

            }else if($(this).attr('data-title') === 'img06'){
                $('#pop_slider .slick-dots > li:nth-child(6)').trigger('click');

            }else if($(this).attr('data-title') === 'img07'){
                $('#pop_slider .slick-dots > li:nth-child(7)').trigger('click');

            }else if($(this).attr('data-title') === 'img08'){
                $('#pop_slider .slick-dots > li:nth-child(8)').trigger('click');

            }else if($(this).attr('data-title') === 'img09'){
                $('#pop_slider .slick-dots > li:nth-child(9)').trigger('click');

            }else if($(this).attr('data-title') === 'img10'){
                $('#pop_slider .slick-dots > li:nth-child(10)').trigger('click');

            }else if($(this).attr('data-title') === 'img11'){
                $('#pop_slider .slick-dots > li:nth-child(11)').trigger('click');

            }else if($(this).attr('data-title') === 'img12'){
                $('#pop_slider .slick-dots > li:nth-child(12)').trigger('click');

            }else if($(this).attr('data-title') === 'img13'){
                $('#pop_slider .slick-dots > li:nth-child(13)').trigger('click');

            }else if($(this).attr('data-title') === 'img14'){
                $('#pop_slider .slick-dots > li:nth-child(14)').trigger('click');

            }else if($(this).attr('data-title') === 'img15'){
                $('#pop_slider .slick-dots > li:nth-child(15)').trigger('click');

            }else if($(this).attr('data-title') === 'img16'){
                $('#pop_slider .slick-dots > li:nth-child(16)').trigger('click');

            }else if($(this).attr('data-title') === 'img17'){
                $('#pop_slider .slick-dots > li:nth-child(17)').trigger('click');

            }else if($(this).attr('data-title') === 'img18'){
                $('#pop_slider .slick-dots > li:nth-child(18)').trigger('click');

            }else if($(this).attr('data-title') === 'img19'){
                $('#pop_slider .slick-dots > li:nth-child(19)').trigger('click');

            }else if($(this).attr('data-title') === 'img20'){
                $('#pop_slider .slick-dots > li:nth-child(20)').trigger('click');
            }





        });

        $('.close').click(function () {

            $('#pop').removeClass('active');




        });


        const popSlider = document.querySelector('#pop_slider');




        if(popSlider){

            $("#pop_slider").slick({
                dots: true, //네비게이션 사용여부
                arrows: true, //화살표 사용여부
                prevArrow: $('.prev'), //이전 화살표
                nextArrow: $('.next'), //다음 화살표
                autoplay:false, //자동넘김
                autoplaySpeed: 2000, //자동넘김 속도
                pauseOnHover:false, //마우스 오버시 자동재생 멈춤
                fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
                speed: 900, // 슬라이드 속도
                infinite: true, // 무한슬라이
                // asNavFor: '.slider2', //다른 슬라이드 연동 여부
                centerMode: false, //센터모드
                centerPadding: '0%', //센터 모드 시 여백
                slidesToShow: 1, //보여질 슬라이드 갯수
                slidesToScroll: 1, //넘겨질 슬라이드 갯수
                swipe: true, //스와이프
                focusOnSelect: true, //슬라이드 선택시 넘어
                draggable:true,
                vertical: false, //세로 슬라이드
                verticalSwiping: false, //세로 스와이프
                initialSlide:0,//슬라이드 시작순서
                cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
                variableWidth: false,
                responsive: [ //반응형 적용여부
                    {
                        breakpoint: 1024, //해상도 브레이크 포인트 설정
                        settings: {

                        }
                    }]


            })  .on('beforeChange', function(event, slick, currentSlide, nextSlide){

            })
                .on('afterChange', function(event, slick, currentSlide, nextSlide){

                });

        }













    })();


});