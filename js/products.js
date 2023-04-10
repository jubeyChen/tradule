const all = document.querySelector('#all');
const options = document.querySelectorAll('.option');
// 有幾個選項
const optionLength = document.querySelectorAll('.option').length;
 //有勾選的個數



// 按下全選後，選擇全部option
all.addEventListener('click', () => {
    for (let i = 0; i < options.length; i++) {
        options[i].checked = all.checked;
    }
});

// 3個option都按，則全選也要按
options.forEach(function (item, i) {
    item.addEventListener('click', () => {
        let checkedLength = document.querySelectorAll('.option:checked').length;
        
        if (optionLength === checkedLength) {
            all.checked = true;
        } else {
            all.checked = false;
        }
    })
})





$(function () {
    // 當商品種類選項改變時
    $('.option').change(function () {
        let selectedOptions = [];
        // 找出被選取的商品種類
        $('.option:checked').each(function () {
            selectedOptions.push('.' + $(this).attr('id'));
        });
        // 如果沒有任何商品種類被選取，顯示所有商品
        if (selectedOptions.length === 0) {
            $('.product li').show();
        } else {
            // 否則只顯示被選取的商品種類
            $('.product li').hide();
            $(selectedOptions.join(',')).show();
        }
    });
})

