import { changeTextsColor } from './texts-color/change-texts-color';
import { generateBackgroundsColor } from './backgrounds-color/change-backgrounds-color';

let isNightMode: boolean = true;

const runNightMode = () => {
  if (isNightMode) {
    isNightMode = false;

    changeTextsColor('white');
    generateBackgroundsColor('rgba(0, 0, 0, 0.85)');
  } else {
    isNightMode = true;

    changeTextsColor('rgba(0, 0, 0, 0.75)');
    generateBackgroundsColor('floralwhite');
  }
};

export { runNightMode };
