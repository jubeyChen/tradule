// 把上傳的圖片瀏覽成封面
const uplaodIMG = document.getElementById('uplaodIMG');
const image = document.getElementById('image');

uplaodIMG.addEventListener('change', () => {
    const file = uplaodIMG.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
        const imageDataUrl = event.target.result;
        image.src = imageDataUrl;
    };
    reader.readAsDataURL(file);
    console.log(uplaodIMG.files);
});

// 按鈕新增 刪減
$(function () {
    const list = `<li>
                <div>
                    <button class="deleteList"><i class="fa-solid fa-xmark"></i></button>
                    <input class="cardTitle" type="text" value="Title">
                    <button class="addCard">新增卡片</button>

                    <div class="cardBlock">
                        <ul>
                            <li>
                                <div class="card">
                                    <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
                                    <textarea class="textArea"></textarea>
                                    <input type="file">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>`;

    const cards = `<li>
                         <div class="card">
                                <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
                                <textarea class="textArea"></textarea>
                                <input type="file">
                         </div>
                    </li>`;

    $('#addList').click(function () {
        $('#listBlock').append(list);
    });

    //事件代理
    $('ul#listBlock').on('click', '.deleteList', function () {
        $(this).closest('li').remove();
    });

    $('#listBlock').on('click', '.addCard', function () {
        $(this).siblings('div.cardBlock').find('ul').append(cards);
    });

    $('#listBlock').on('click', '.delete', function () {
        $(this).closest('li').remove();
    });

    $("#listBlock").sortable({
        axis: "y",
        containment: "parent",
        cursor: "move",
        opacity: 0.6,
    });
})