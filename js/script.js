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



    new Swiper('.objects_slider_container',{
        slidesPerView: 3,
        spaceBetween: 18,
        navigation: {
            nextEl: "#objects_next",
            prevEl: "#objects_prev",
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
        slidesPerView: 4,
        spaceBetween: 18,
        navigation: {
            nextEl: "#deleting_next",
            prevEl: "#deleting_prev",
          },
    })

    new Swiper('.deleting_slider_container',{
        slidesPerView: 4,
        spaceBetween: 18,
        navigation: {
            nextEl: "#deleting_next1",
            prevEl: "#deleting_prev1",
          },
    })


})