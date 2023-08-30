$(function(){
    var module_right = $('.module_right').outerHeight() - 30;
    var user_info = $('.user_info').outerHeight();
    var noti = $('section.noti').outerHeight() + 16;

    var diagnosisOuterHeight = $('section.diagnosis').outerHeight()
    var diagnosis_Header = $('section.diagnosis h2').outerHeight();
    var diagnosis_Title = $('section.diagnosis ul').outerHeight();

    var boundary = $('section.diagnosis').offset().top + $('section.diagnosis').height();

    if(boundary > module_right){
        $('section.diagnosis').css('height', module_right - user_info - noti -16);
        $('section.diagnosis dl').css('maxHeight', diagnosisOuterHeight - diagnosis_Header - diagnosis_Title - 16);
    } else {
        $('section.diagnosis, section.diagnosis dl').removeAttr('style');
    }

    $(window).resize(function(){
        var module_right = $('.module_right').outerHeight() - 30;
        var user_info = $('.user_info').outerHeight();
        var noti = $('section.noti').outerHeight() + 16;

        var diagnosisOuterHeight = $('section.diagnosis').outerHeight()
        var diagnosis_Header = $('section.diagnosis h2').outerHeight();
        var diagnosis_Title = $('section.diagnosis ul').outerHeight();

        var boundary = $('section.diagnosis').offset().top + $('section.diagnosis').height();

        // if(boundary > module_right){
            $('section.diagnosis').css('height', module_right - user_info - noti -16);
            $('section.diagnosis dl').css('maxHeight', diagnosisOuterHeight - diagnosis_Header - diagnosis_Title - 16);
        // } else {
        //     $('section.diagnosis, section.diagnosis dl').removeAttr('style');
        // }
    });
})