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