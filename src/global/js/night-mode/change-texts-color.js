import { generateLightText } from './generate-light-text';

const changeTextsColor = (color) => {
    const generateLightTextInArray = () => {
        const textsArray = ['p', 'h1', 'h2', 'h3', 'h5', 'thead', 'td', 'th', 'li', '.site-header a', 'input', 'label'];

        for (let tag of textsArray) {
            generateLightText(`${tag}`, `${color}`);
        }
    };

    generateLightTextInArray();
};

export { changeTextsColor };