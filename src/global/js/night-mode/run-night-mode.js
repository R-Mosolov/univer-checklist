import { changeTextsColor } from './texts-color/change-texts-color';
import { generateBackgroundsColor } from './backgrounds-color/change-backgrounds-color';
// import { lightModeDetails } from './texts-color/details/light-mode-details';
// import { nightModeDetails } from './texts-color/details/night-mode-details';

let isNightMode = true;

const runNightMode = () => {
    if (isNightMode) {
        isNightMode = false;

        changeTextsColor('white');
        generateBackgroundsColor('rgba(0, 0, 0, 0.85)');
        // lightModeDetails();
    } else {
        isNightMode = true;

        changeTextsColor('rgba(0, 0, 0, 0.75)');
        generateBackgroundsColor('floralwhite');
        // nightModeDetails();
    }
};

export { runNightMode };
