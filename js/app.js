// toggle
$(document).ready(function(){
    $('.show-btn').click(function(){
        $('.sidebar').css({marginLeft:'0'});
    })
    $('.hide-btn').click(function(){
        $('.sidebar').css({marginLeft:'-100%'});
    })
})

// card 
function go(url){
    setTimeout(function(){
        location.href = `${url}`;
    }, 900);
}


// item list full screen 
$('.mm-btn').click( function(){
    let parent = $(this).closest(".card");
    // console.log(parent);
    parent.toggleClass('full-screen');
    let check = $(this).hasClass('feather-maximize-2');
    if (check) {
        $(this).removeClass("feather-maximize-2");
        $(this).addClass("feather-minimize-2");
    } else {
        $(this).removeClass("feather-minimize-2");
        $(this).addClass("feather-maximize-2");
    }
});


//Auto Scroll
let screenHeight = $(window).height();
let activeMenu = $('.list-item .active').offset().top;

if(activeMenu > screenHeight*0.8){
    $('.sidebar').animate({
        scrollTop: activeMenu
    }, 1000);
}

//add nav brand a shadow
document.querySelector('.sidebar').addEventListener(scroll, function(){
    let navBrand = document.querySelector('.nav-brand');
    let x = navBrand.style.top;
    if(x = '10px'){
        navBrand.style.boxShadow = '10px 10px black';
    }
});