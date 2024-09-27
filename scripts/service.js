import './index';
document.addEventListener('DOMContentLoaded', () => {
    const serviceTab = document.querySelectorAll('.service');
    const contentBtns = document.querySelectorAll('.btn-outline');

    const clearActive = () => serviceTab.forEach(item => item.classList.remove('active'));
    const clearActiveBtn = () => contentBtns.forEach(item => item.classList.remove('active'));

    serviceTab.forEach(item => item.addEventListener('click', (e) => {
        clearActive();
        item.classList.add('active');
        const serviceActive = document.querySelector('.service-active-content');
        serviceActive.classList.remove('hidden')
    }))

    contentBtns.forEach(item => item.addEventListener('click', () => {
        clearActiveBtn();
        item.classList.add('active');
    }));

    const pluses = document.querySelectorAll('.tab-item__plus');
    const allDisable = () => document.querySelectorAll('.visible').forEach(item => {
        item.classList.add('max-hidden');
        item.classList.remove('visible');
        item.setAttribute('src', '/public/img/plus.png')
    });
    pluses.forEach(item => item.addEventListener('click', (e) => {
        if(e.target.getAttribute('src') === '/public/img/x.png') {
            allDisable();
            e.target.setAttribute('src', '/public/img/plus.png')
            return
        }
        allDisable();
        e.target.parentElement.parentElement.querySelectorAll('.max-hidden').forEach(item => {
            console.log(item)
            item.classList.add('visible');
            item.classList.remove('max-hidden');
        });
        e.target.setAttribute('src', "/public/img/x.png")
    }))
});