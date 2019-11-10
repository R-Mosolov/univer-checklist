import { generateBackgroundColor } from './generate-background-color';

const generateBackgroundsColor = (color) => {
    const generateBackgroundsColorInArray = () => {
        const _allDocumentBackgrounds = ['.App', '.site-header', '.site-header .dropdown-menu', '.card-background'];

        for (let tag of _allDocumentBackgrounds) {
            generateBackgroundColor(`${tag}`, `${color}`);
        }
    };

    generateBackgroundsColorInArray();
};

export { generateBackgroundsColor };
