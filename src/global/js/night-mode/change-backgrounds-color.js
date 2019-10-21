import { generateBackgroundAnticolor } from './generate-background-anticolor';

const generateBackgroundsColor = (color) => {
    const generateBackgroundsColorInArray = () => {
        const allDocumentBackgrounds = ['.App', '.site-header', '.site-header .dropdown-menu', '.card-background'];

        for (let tag of allDocumentBackgrounds) {
            generateBackgroundAnticolor(`${tag}`, `${color}`);
        }
    };

    generateBackgroundsColorInArray();
};

export { generateBackgroundsColor };