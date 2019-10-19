import { changeTextsColor } from './change-texts-color';
import { generateBackgroundsColor } from './change-backgrounds-color';

const runNightMode = () => {
    changeTextsColor();

    generateBackgroundsColor();
};

export { runNightMode };