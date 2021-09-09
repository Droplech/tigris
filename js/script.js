$(document).ready(function(){
    
    $('.tab_links_item').click(function(){
        $('.tab_links_item').removeClass('tabs-active');
        $(this).addClass('tabs-active');
    })

    $('.tab_links_item').click(function(e){
        e.preventDefault()
        $('.tab_links_item').removeClass('tabs-active')
        $(this).addClass('tabs-active')
        $('.tab_content').removeClass('tab_content-active')
        $( $(this).find('a').attr('data-tab') ).addClass('tab_content-active') 
    })

    $('.num_page').click(function(){
        $('.num_page').removeClass('num_page-active')
        $(this).addClass('num_page-active')
    })
    $(document).scroll(function(){
        if( $(window).scrollTop() >= $('.navigation').height() ){
            $('.fixed_nav').addClass('fixed_nav-active')
        }else{
            $('.fixed_nav').removeClass('fixed_nav-active')
        }
         
    })
    $('.burger_btn').click(function(){
        $('.burger_menu').fadeIn()
        $('html').css("overflow","hidden")
    })
    $('.close_btn, .burger_menu ul li a').click(function(){
        $('.burger_menu').fadeOut()
        $('html').css("overflow","auto")
    })

    


    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });
    
    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });
    
    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });





    $('.questions_item_title').click(function(){
        if(!$(this).hasClass('questions_item_title-active') ){
            $('.questions_item_title').next().slideUp()
            $('.questions_item_title').removeClass('questions_item_title-active')
            $(this).addClass('questions_item_title-active')
            $(this).next().slideDown()

        }else{
            $(this).removeClass('questions_item_title-active')
            $(this).next().slideUp()
        }
    })


    $('.calc_mobil_open').click(function(){
        if( !$('.open_form_mobilCalc').hasClass('mobilCalc-active')){
            $('.open_form_mobilCalc').addClass('mobilCalc-active');
            $('.open_form_mobilCalc').slideDown()
        }else{
            $('.open_form_mobilCalc').addClass('mobilCalc-active');
            $('.open_form_mobilCalc').slideUp()
        }
    })

    $('.burger_down_menu').click(function(){
        if( !$(this).hasClass('down_menu-active') ){
            $('.burger_down_menu').removeClass('down_menu-active');
            $('.burger_down_menu').next().slideUp()
            $(this).addClass('down_menu-active');
            $(this).next().slideDown()

        }else{
            $(this).removeClass('down_menu-active');
            $(this).next().slideUp()
        }
    })
 


    
    // range
        
    $( "#slider-range-min" ).slider({
        range: "min",
        value: 88,
        min: 1,
        max: 200,
        slide: function( event, ui ) {
        $( "#amount" ).val(ui.value);
        }
    });

    $( "#amount" ).val($( "#slider-range-min" ).slider( "value" ) );


    // range/


    $('.open_modal_form').click(function(e){
        e.preventDefault()
        $('.modal_bg_fon').fadeIn()
        $('.form_modal').fadeIn()
    })

    $('.modal_bg_fon, .close-form_modal').click(function(){
        $('.modal_bg_fon').fadeOut()
        $('.form_modal').fadeOut()
    })




    $('#main_form_modal').bind("submit",checkForm);
    function checkForm(e){
        e.preventDefault()

        var el = document.getElementById('main_form_modal')

        var name = el.name.value;
        var phone = el.phone.value;
      
        var fail = "";
        var acept = "Форма заполнена";
        
        if(name == "" || phone == "" )
        fail = "Все поля должны быть заполнены корректно";

        else if(name.length <= 1 || name.length > 50  )
        fail = "Введите корректное имя";

        else if(phone.length < 12 || phone.length > 12)
        fail = "Номер введен некорректно"
        
        console.log("Name:" + " " + name + ";")
        console.log("Phone"  + " " + phone + ";");
        
        if( fail != ""){
            $("#error").html(fail)
            $("#acept").html("")
        }else{
            $("#acept").html(acept)
            $("#error").html("")
            setTimeout(() => {
                window.location.reload();
            }, 1000);
            
        }
    }



















    new Swiper('.objects_slider_container',{
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: "#objects_next",
            prevEl: "#objects_prev",
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
                spaceBetween: 90,
            },
            800:{
                slidesPerView: 3,
                spaceBetween: 18,
            }
        },
    })

    new Swiper('.reviews_slider_container',{
        slidesPerView: 1,
        navigation: {
            nextEl: "#reviews_next",
            prevEl: "#reviews_prev",
          },
    })




    new Swiper('.deleting_slider_container',{
        slidesPerView: 1,
        
        navigation: {
            nextEl: "#deleting_next",
            prevEl: "#deleting_prev",
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
                spaceBetween: 100,
            },
            800:{
                slidesPerView: 3,
                spaceBetween: 18,
            },
            1200:{
                slidesPerView: 4,
                spaceBetween: 18,
            }
        },
    })

    new Swiper('.deleting_slider_container',{
        slidesPerView: 1,
        
        navigation: {
            nextEl: "#deleting_next1",
            prevEl: "#deleting_prev1",
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
                spaceBetween: 100,
            },
            800:{
                slidesPerView: 3,
                spaceBetween: 18,
            },
            1200:{
                slidesPerView: 4,
                spaceBetween: 18,
            }
        },
    })
  
})