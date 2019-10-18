import { changeTextsColor } from './change-texts-color';

const runNightMode = () => {
    changeTextsColor();

    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';

    const siteHeaderBackground = document.querySelector('.site-header');
    siteHeaderBackground.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';

    const documentButtons = document.querySelectorAll('button');
    for (let btn of documentButtons) {
        btn.style.backgroundColor = 'goldenrod';
    }
    const siteHeaderButton = document.querySelector('.site-header .btn');
    siteHeaderButton.style.backgroundColor = 'rgba(0, 0, 0, 0.65)';
    const siteHeaderDropItems = document.querySelector('.site-header .dropdown-menu');
    siteHeaderDropItems.style.backgroundColor = 'rgba(0, 0, 0, 0.65)';
};

export { runNightMode };