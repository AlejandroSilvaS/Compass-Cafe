document.addEventListener('DOMContentLoaded', () => {
    const userIcon = document.querySelector('.user-icon');
    const hoverMenu = document.querySelector('.hover-menu');

    userIcon.addEventListener('mouseenter', () => {
        hoverMenu.style.display = 'block';
    });

    userIcon.addEventListener('mouseleave', () => {
        hoverMenu.style.display = 'none';
    });
});