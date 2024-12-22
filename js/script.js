$(document).ready(function () {
    $('.main-title h1').css({opacity: '1'});



  $('.hedar-search').on('click', function(){
      $('.overlay').fadeIn('slow');
      
    })
  $('#submit').on('click', function(){
    $('.overlay').fadeOut('slow');
      function dosearch() {
       var term = $('#spterm').val();
             
        $('span.highlight').each(function(){ //удаляем старую подсветку
         $(this).after($(this).html()).remove();  
        });
        var t = '';
        $('div.content').each(function(){ // в селекторе задаем область поиска
         $(this).html($(this).html().replace(new RegExp(term, 'ig'), '<span class="highlight">$&</span>')); // выделяем найденные фрагменты
         let n = $('span.highlight').length; // количество найденных фрагментов
         console.log('n = '+n);
         if (n==0){
          $('.results').html('Ничего не найдено');
          
        }
         else {
          
          $('.results').html('Результатов: '+n); }
        });
       }
      
      $('#spterm').keyup(function(){
        if ($('#spterm').val()!=term) // проверяем, изменилась ли строка
         if ($('#spterm').val().length>=minlen) { // проверяем длину строки
          dosearch(); // если все в порядке, приступаем к поиску
         }
         else
          $('.results').html('&nbsp'); // если строка короткая, убираем текст из DIVа с результатом 
         
       });
       dosearch();
       $('.results').fadeIn('slow');
         

  });  
  $('.content').on('dblclick', function(){
    $('.results').fadeOut('slow');
    $('span.highlight').each(function(){ //удаляем старую подсветку
      $(this).after($(this).html()).remove();  
     });
     $('.results').html('');
     setTimeout('location.reload()', 2000);//перегрузка страницы
     

     
    

  });
//галерия
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Загрузка изображения #%curr%...',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    }
    });
    //модальное окно видио
    $('.popup-youtube').magnificPopup({ 
      type: 'iframe' 
   });
  //коментарии
  $(document).on('click', '#addCommint', function() {
    const form = $('#commintForm');
    form.css('display', 'block');
    $('#addCommint').replaceWith(form);
    
  });
  $(document).on('click', '#done', function(event) {
     const comment = $('#textarea').val();
     $('<p class="title--subtitle">'+comment+'</p>').appendTo($(".commint"));
     $('#commintForm').css('display', 'none');
     $('<a href="#" id="addCommint" onclick="return false" class="title--subtitle">Добавить коментарий</a>').appendTo('.commints');
     $('#textarea').val('');
     const length = $('.commint p');
    
         if(length.length==4) {
           $('.commint').children().slice(1,2).remove();
           
        }
       
    });

    //изменение свойства css
   $('.footer-address__year').on('mouseover', function(){
    $('.footer-address__year').css({
      transition: 'all 2s ease',
      transform: 'scale(1.5)',
      color:'rgb(255, 255, 255)'
    });
   }); 
   
   $('.footer-address__year').on('mouseout', function(){
    $('.footer-address__year').css({
      transition: 'all 2s ease 2s',
      transform: 'scale(1)',
      color:'rgb(255, 163, 67)'
    });

       });   
//scroll

  $('.main-scroll').on('click', function(){
   const height =$('.main-scroll').offset().top+750;
    $('html').animate({"scrollTop":height},'slow'); 
    if($('.main-scroll').offset().top>4500){
      $('html').animate({"scrollTop":0},'slow');
    }
  });

  //Валидация
  function validateForms(form){
    $(form).validate({
        rules: {
            
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            }
        }
    });
};

validateForms('.footer-forn');
// отправка
$('form').submit(function(e){ 
  e.preventDefault; 
  
  if (!$(this).valid()){ 
      return; 
  } 
  $.ajax ({ 
      type: "GET", 
      url: "phpmailer/smart.php", 
      data: $(this).serialize() 
  }).done(function(){ 
  $(this).find("input").val(""); 
   
  $('form').trigger('reset'); 
  }); 
  return false; 
  }); 
  
  
  //скролл анимация
    
  $(window).scroll(function(){
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $('.valley-gallery').offset().top-100;
    var eh = $('.valley-gallery').outerHeight();
    var dh = $(document).height(); 
    var ri = $('.rever-gallery').offset().top-100;
    var ab = $('.abray-gallery').offset().top-100;
     
    if (wt+wh >= et ){
      $('.valley-gallery').addClass('valley-gallery--active');
     
    }else{$('.valley-gallery').removeClass('valley-gallery--active');}

    if(wt+wh >= ri){$('.rever-gallery').addClass('rever-gallery--active');
    }else{$('.rever-gallery').removeClass('rever-gallery--active');}
    
    if(wt+wh >= ab){$('.abray-gallery').addClass('abray-gallery--active');

    }else{$('.abray-gallery').removeClass('abray-gallery--active');}

  });


   
  
    });
  