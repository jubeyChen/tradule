const tabBtn = document.getElementsByClassName('tabBtn');
const tabContent = document.getElementsByClassName('tabContent');

for (let i = 0; i < tabBtn.length; i++){
    tabBtn[i].addEventListener('click', function (e) {
        panelDisplay(this);
    })
}

function panelDisplay(activePanel) {
    for (let i = 0; i < tabBtn.length; i++){
        if (tabBtn[i] == activePanel) {
            tabBtn[i].classList.add('-on');
            tabContent[i].style.display = 'block';
        } else {
            tabBtn[i].classList.remove('-on');
            tabContent[i].style.display = 'none';
        };
    };
};

