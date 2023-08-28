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