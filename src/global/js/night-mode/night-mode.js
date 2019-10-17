import { changeTextsColor } from './change-texts-color';

const runNightMode = () => {
    changeTextsColor();

    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
};

export { runNightMode };