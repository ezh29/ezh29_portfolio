$(window).load(function () {
    $(function () {
        $(window).scroll(function () {
            //$(this).scrollTop():현재 스크롤바의 위치
            if ($(this).scrollTop() > 500) {
                $('#Move_Top').fadeIn();
            } else {
                $('#Move_Top').fadeOut();
            }
        });
        $('#Move_Top').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, "fast");
            return false;
        });

    });
});
