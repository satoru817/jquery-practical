function downOpacity(item){
  item.animate({
    opacity:0.5,
  },200);
}

function upOpacity(item){
  item.animate({
    opacity: 1.0,
  },200);
}



$(function(){
  //topボタンを押したときのスクロールをスムーズにする設定
  $('a[href^="#"]').on('click',function(){
    const href = $(this).attr('href');
    if(href != '#'){
      const position = $(href).offset().top;
      $('html,body').animate({scrollTop:position},500);
    } else{
      $('html,body').animate({scrollTop:0},500);
    }
    
   

    
    return false;
  });

//カローセルの設定
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    speed: 300,
  });

  //透明度の変更アニメーション
  $('#home').on('mouseover',function(){
    downOpacity($(this));
  });
  
  $('#home').on('mouseout',()=>{
    upOpacity($('#home'));
  });

  $('#li_about').on('mouseover',function(){
    downOpacity($('#li_about'));
  });
  
  $('#li_about').on('mouseout',()=>{
    upOpacity($('#li_about'));
  });

  $('#li_works').on('mouseover',function(){
    downOpacity($('#li_works'));
  });
  
  $('#li_works').on('mouseout',()=>{
    upOpacity($('#li_works'));
  });

  $('#img1').on('mouseover',function(){
    downOpacity($('#img1'));
  });
  
  $('#img1').on('mouseout',()=>{
    upOpacity($('#img1'));
  });

  $('#img2').on('mouseover',function(){
    downOpacity($('#img2'));
  });
  
  $('#img2').on('mouseout',()=>{
    upOpacity($('#img2'));
  });

  $('#img3').on('mouseover',function(){
    downOpacity($('#img3'));
  });
  
  $('#img3').on('mouseout',()=>{
    upOpacity($('#img3'));
  });

  //topボタンのopacity変化の設定
  
  $('#top_button').on('mouseover',function(){
    const scrollTop = $(window).scrollTop();
    if(scrollTop>125){
      downOpacity($(this));
    }
  
  });
  $('#top_button').on('mouseout',function(){
    const scrollTop = $(window).scrollTop();
    if(scrollTop>125){
      upOpacity($(this));
    }
  });

  //モーダル表示
  $('img[id^="img"]').on('click',function(){
    $('#modal').css('display','block');
    const id = $(this).prop('id');
    const num = id.slice(3);
    const imgSrc = `image/works${num}.png`
    console.log(imgSrc);
    $('#modal_img').prop('src',imgSrc);
   
  });

  //モーダル非表示
  $('#close_button').on('click',function(){
    $('#modal').css('display','none');
  });

  //scrollに関する挙動
$(window).scroll(function(){

  var scroll = $(this).scrollTop();
  var height = $(this).height();
  var about_position = $('.about').offset().top;
  var works_position = $('.works').offset().top;

  //scroll量が125px以上なら、topボタンをopacity:1;で表示
  //表示されていないときはリンクを無効にする
  if(scroll > 125){
    $('#top_button').css('opacity',1);
    //リンクを無効化
    $('#top_button').css('pointer-events','initial');
  }else{
    $('#top_button').css('opacity',0);
    $('#top_button').css('pointer-events','none');
  }

  if(scroll+height >= about_position){
    upOpacity($('.about'));
  }

  if(scroll+height >= works_position){
    upOpacity($('.works'));
  }


});



});