$('.head-ser').mousemove(function(){
    $('.hover-show').slideDown();
})
$('.logo-wrap').mousemove(function(){
    $('.hover-show').slideUp();
})
$('.out').mousemove(function(){
    $('.hover-show').slideUp();
})
$('.nav-wrap').mousemove(function(){
    $('.hover-show').slideUp();
})
$('.content').mousemove(function(){
    $('.hover-show').slideUp();
})

var $divs = $('.hover-show>div')

$divs.each(function(index){
    $divs.eq(index).children().eq(0).hover(function(){
        $divs.eq(index).children().eq(0).children().eq(0).animate({right:'0px'})
        $divs.eq(index).children().eq(0).children().eq(1).animate({right:'30px'})
        $divs.eq(index).children().eq(0).children().eq(3).animate({right:'90px'})
    },
    function(){
        $divs.eq(index).children().eq(0).children().eq(0).animate({right:'30px'})
        $divs.eq(index).children().eq(0).children().eq(1).animate({right:'60px'})
        $divs.eq(index).children().eq(0).children().eq(3).animate({right:'60px'})
    }
    )
})


//吸顶效果
var logoTop = $('.logo').offset().top;
var oTop = $('.section_wrapper').offset().top;
var oTop2 = $('footer').offset().top;

$(document).on('scroll',function(){

    if($(document).scrollTop()>logoTop){
        $('.logo').css({
            "position":"fixed",
            "top":"0",
            "left":"50%",
            "marginLeft":"-600px",
            "backgroundColor":"rgba(255,255,255,0.9)"
        })
    }else{
        $('.logo').css({
            "position":"relative",
            "background":"transparent",
        })
    }


    if($(document).scrollTop()>=oTop && $(document).scrollTop()<=oTop2-600){
        $('.img-box').css({
            "position":"fixed",
            "top":"85px",
            "left":"150px"
        })
        // if($(document).scrollTop())

    }else if($(document).scrollTop()>oTop2-600){
        $('.img-box').css({
            "position":"absolute",
            "left":"74.5px",
            "top":"1300px"
        })
    }else{
        $('.img-box').css({
            "position":"absolute",
            "left":"74.5px",
            "top":"20px"
        })
    }
})

//点击使边框变红色
$(".spec_item").each(function(index){
    $(".spec_item").eq(index).click(function(){
        $(".spec_item").css({"borderColor":"#ddd"})
        $(".spec_item").eq(index).css({"borderColor":"red"})
    })
})

$(".suite_detail-left").each(function(index){
    $(".suite_detail-left").eq(index).click(function(){
        $(".suite_detail-left").css({"borderColor":"#ddd"})
        $(".suite_detail-left").eq(index).css({"borderColor":"red"})
    })
})


//点击+ -计算
var $val = $('input').val()
$('.num1').click(function(){
    if($val<=1){
        $('.num2').removeClass("disabled")
        $('.num1').addClass("disabled")
    }else{
        $('.num2').removeClass("disabled")
        $('.num1').removeClass("disabled")
        $val--;
        $('input').val($val);
    }
})

$('.num2').click(function(){
    if($val>=5){
        $('.num1').removeClass("disabled")
        $('.num2').addClass("disabled")
    }else{
        $('.num1').removeClass("disabled")
        $val++;
        $('input').val($val);
    }
})


//分期付款  hover 和click事件
$(".item_detail").each(function(index){
    //hover事件
    $(".item_detail").eq(index).hover(function(){
        if($(".item_detail").eq(index).css("color")=="rgb(255, 1, 0)"){
            $(".item_detail").eq(index).css({"color":"rgb(255, 1, 0)"})
        }else{
            $(".item_detail").eq(index).css({"color":"red"})
        }
        
        $(".item_checkbox").eq(index).css({"borderColor":"red"})
    },function(){
        
        if($(".item_detail").eq(index).css("color")=="rgb(255, 1, 0)"){
            $(".item_detail").css({"color":"#777777"})
            $(".item_detail").eq(index).css({"color":"rgb(255, 1, 0)"})
        }else{
            $(".item_detail").eq(index).css({"color":"#777777"})
        }
        
        $(".item_checkbox").eq(index).css({"borderColor":"#ddd"})
    })
    //click事件
    $(".item_detail").eq(index).click(function(){
        $(".item_checkbox").css({"backgroundColor":"#fff"})
        $(".item_detail").css({"color":"#777777"})
        $(".item_detail").eq(index).css({"color":"rgb(255, 1, 0)"})
        $(".item_checkbox").eq(index).css({"borderColor":"red","backgroundColor":"red"})
    })
})


//scroll事件
//吸顶效果
// var oTop = $('.section_wrapper').offset().top;
// var oTop2 = $('footer').offset().top;
// $(document).on('scroll',function(){
//     console.log(1);
    
//     if($(document).scrollTop()>=oTop || $(document).scrollTop()<=oTop2+500){
//         console.log(12);
//         $('.img-box').css({
//             "position":"fixed",
//             "top":"30px",
//             "left":"74.5px"
//         })
//     }else{
//         console.log(123);
//         $('.img-box').css({
//             "position":"absolute",
//             "left":"74.5px",
//             "top":"20px"
//         })
//     }
// })