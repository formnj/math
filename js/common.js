/* actionbar 노출관련 */
var lastScroll = 0;
var innerHeight = $(window).height();

$(window).on('scroll', function(){
    var scrollTop = $(this).scrollTop();

    var scrollHeight = $('body').height();

    if(scrollTop > lastScroll) {
        //down
        if (scrollTop + innerHeight >= (scrollHeight-1)) {
            $('.action_bar').stop().removeAttr('style');
        } else {
            $('.action_bar').stop().css('bottom', -($('.action_bar').outerHeight()));
        }
    } else {
        // up
        $('.action_bar').stop().removeAttr('style');
    }

    lastScroll = scrollTop;
});
/* //actionbar 노출관련 */

function toggle_slide(_target) {
    var _target = $(_target);
    _target.closest('dl').hasClass('single') ? // 하나만 오픈
    (
        _target.parent().hasClass('active') ?
        (
            _target.parent().next('dd').stop().slideUp(),
            _target.parent().removeClass('active')
        ) : (
            _target.parent().addClass('active'),
            _target.parent().siblings().removeClass('active'),
            _target.closest('dl').children('dd').stop().slideUp(),
            _target.parent().next('dd').stop().slideDown()
        )
    ) : ( // 각각 제어
        _target.parent().hasClass('active') ?
        (
            _target.parent().next('dd').stop().slideUp(),
            _target.parent().removeClass('active')
        ) : (
            _target.parent().addClass('active'),
            _target.parent().next('dd').stop().slideDown()
        )
    )
}

/* progress bar */
function progress_bar(_target){
    var _target = $(_target),
        _bar_W = Number(_target.find('em').text());
        _target.find('.progress_bar').css('width', _bar_W+'%');
        
    var text_pos = setInterval(function(){
        if (_target.children('.progress_bar').outerWidth() < (_target.find('em').outerWidth() + 1)) {
            _target.find('em').css({
                marginRight:-_target.find('em').outerWidth()
            });
        } else {
            _target.find('em').removeAttr('style');
        }

        setTimeout(function(){
            clearInterval(text_pos);
        },1500); // 프로그래스 바 애니메이션이 1초 동안 진행되므로 여유시간 포함 1.5초가 지난 후엔 텍스트 위치 검사 중지
    },10); // 프로그래스 바 넓이가 변하는 동안 0.01초에 한번씩 검사해서 텍스트의 위치를 변경해주기 위함
}