/////////////////// Open and close tag list panels
class tagListDisplay {
    static openCloseTagList() {
        const btns = document.getElementsByClassName('research__tag');
        for (let btn of btns) {
            btn.addEventListener('click',function() {
                let elementToTogle = btn.dataset.type;
                if (document.getElementById(elementToTogle).classList.contains('modalTag-show')) {
                    document.getElementById(elementToTogle).classList.remove('modalTag-show');
                    btn.classList.remove('research__tag--bigger');
                } else {
                    document.getElementById(elementToTogle).classList.add('modalTag-show')
                    btn.classList.add('research__tag--bigger');
                }
            });
        }
    }
}
export default tagListDisplay;
