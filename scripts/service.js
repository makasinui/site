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
    }))
});