import { generateDarkBackground } from './generate-dark-background';

const generateBackgroundsColor = (color) => {
    const generateBackgroundsColorInArray = () => {
        const backgroundsArray = ['.App', '.site-header', '.site-header .dropdown-menu', '.card-background'];

        for (let tag of backgroundsArray) {
            generateDarkBackground(`${tag}`, `${color}`);
        }
    };

    generateBackgroundsColorInArray();
};

export { generateBackgroundsColor };