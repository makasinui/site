import './index';
document.addEventListener('DOMContentLoaded', () => {
    const contentBtns = document.querySelectorAll('.btn-outline');

    const clearActiveBtn = () => contentBtns.forEach(item => item.classList.remove('active'));

    contentBtns.forEach(item => item.addEventListener('click', () => {
        clearActiveBtn();
        item.classList.add('active')
        document.querySelector('.hidden').classList.remove('hidden');
    }))
    const pluses = document.querySelectorAll('.tab-item__plus');
    const allDisable = () => {
        
        const plusIcons = document.querySelectorAll('[src=""]')
        document.querySelectorAll('.visible').forEach(item => {
        item.classList.add('max-hidden');
        item.classList.remove('visible');
            
    }
    )};
    pluses.forEach(item => item.addEventListener('click', (e) => {
        if(e.target.getAttribute('src') === '/img/x.png') {
            allDisable();
            e.target.setAttribute('src', '/img/plus.png')
            return
        }
        allDisable();
        e.target.parentElement.parentElement.querySelectorAll('.max-hidden').forEach(item => {
            console.log(item)
            item.classList.add('visible');
            item.classList.remove('max-hidden');
        });
        e.target.setAttribute('src', "/img/x.png")
    }))
});