import { generateTextAnticolor } from './generate-text-anticolor';

const changeTextsColor = (color) => {
    const generateLightTextInArray = () => {
        const allDocumentTexts = ['p', 'h1', 'h2', 'h3', 'h5', 'thead', 'td', 'th', 'li', '.site-header a', 'input', 'label'];

        for (let tag of allDocumentTexts) {
            generateTextAnticolor(`${tag}`, `${color}`);
        }
    };

    generateLightTextInArray();
};

export { changeTextsColor };