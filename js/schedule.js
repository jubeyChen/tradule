$(function () {
    $('#like').click(function () {
        $(this).find('i').toggleClass('fa-solid');
    })

    $('#sub').click(function () {
        $(this).toggleClass('-on');
        if ($(this).hasClass('-on')) {
            $(this).text('已訂閱');
        } else {
            $(this).text('訂閱');
        }
    })


    // 行程內容
    $('.title').click(function () {
        $(this).next().slideToggle();
        $(this).find('i').toggleClass('-on');
    })
})