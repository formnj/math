$(function(){
  $(window).resize(function(){
    var module_right = $('.module_right').outerHeight() - 30;
    var user_info = $('.user_info').outerHeight();
    var noti = $('section.noti').outerHeight() + 16;
    $('section.diagnosis').css('height', module_right - user_info - noti + 32);
        
    // var offsetTop = $('section.diagnosis').offset().top;
    var diagnosisOuterHeight = $('section.diagnosis').outerHeight()
    var diagnosis_Header = $('.diagnosis h2').outerHeight();
    var diagnosis_Title = $('.diagnosis ul').outerHeight();
    $('.diagnosis dl').css('maxHeight', diagnosisOuterHeight - diagnosis_Header - diagnosis_Title + 32)
    })//resize
})


// window.addEventListener('resize', function(){
//   var offsetTop = document.querySelector('section.diagnosis').offsetTop;
//   var diagnosis_Header = document.querySelector('.diagnosis h2').offsetHeight;
//   var diagnosis_Title = document.querySelector('.diagnosis ul').offsetHeight;
//   document.querySelector('.diagnosis dl').style.maxHeight = (offsetTop - diagnosis_Header - diagnosis_Title - 16) + 'px'

// })/