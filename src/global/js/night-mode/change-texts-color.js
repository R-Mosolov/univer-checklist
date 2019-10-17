import { generateLightText } from './generate-light-text';

const changeTextsColor = () => {
    const generateLightTextInArray = () => {
        const textsArray = ['p', 'h1', 'h2', 'h3', 'thead', 'td', 'th', 'li', 'button', '.btn', 'input', 'label'];

        for (let tag of textsArray) {
            generateLightText(`${tag}`);
        }
    };

    generateLightTextInArray();
};

export { changeTextsColor };