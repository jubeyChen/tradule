$(function () {

    let total = 0;
    
    
    $('.list').on('click', '.delete', function () {
        $(this).closest('ul').remove();
        
        const prices = $('.price');

        if (prices.length === 0) {
            total = 0;
            $('#sum').text(`${total}`);
        } 

        for (let i = 0; i < prices.length; i++) {
            total += parseInt(prices[i].innerText);
        }
        $('#sum').text(`${total}`);
        
    })
    
    
})