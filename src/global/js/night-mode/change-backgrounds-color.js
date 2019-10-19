import { generateDarkBackground } from './generate-dark-background';

const generateBackgroundsColor = () => {
    const generateBackgroundsColorInArray = () => {
        const backgroundsArray = ['.App', '.site-header', '.site-header .dropdown-menu', '.card-background'];

        for (let tag of backgroundsArray) {
            generateDarkBackground(`${tag}`);
        }
    };

    generateBackgroundsColorInArray();
};

export { generateBackgroundsColor };