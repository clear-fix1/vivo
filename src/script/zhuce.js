$('.show-country').click(function(){
    $('.country-list-box').toggle();
    $('.country-item').click(function(){
        $('.show-country').text($(this).text());
        $('.country-list-box').hide();
    });

})

$('.check1-box').click(function(){
    if($('.check1-box>img').length!=0){  
        $('.check1-box').html("")       
    }else{  
        $('.check1-box').html(`<img data-v-a1ce28c8="" src="https://accountstatic.vivo.com.cn/accountstatic.vivo.com.cn/static/img/selected-icon.a90d513.png.webp">`)
    }
})
