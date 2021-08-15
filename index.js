// blog filter menu
$(document).document('click','.blog-filter li', function(){
    $(this).addClass('blog-filter-active').siblings().removeClass('blog-filter-active')
});

// post filter
$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value =="all"){
            $('.blog-box').show('1000');
        }
        else{
            $('.blog-box').not('.'+value).hide('1000');
            $('.blog-box').filter('.'+value).show('1000');
        }
    });
});

// for-fix-filter-menu

$(window).scroll(function(){
    if($(document).scrollTop() > 80){
        $('nav').addClass('fix-nav');
    }
    else{
        $('nav').removeClass('fix-nav');
    }
});