import { generateTextColor } from "./generate-text-color";

const changeTextsColor = (color: string) => {
  const generateLightTextInArray = () => {
    const _allDocumentTexts = [
      "p",
      "h1",
      "h2",
      "h3",
      "h5",
      "thead",
      "td",
      "th",
      "li",
      ".site-header a",
      ".main-action__text",
      "input",
      "label",
    ];

    for (let tag of _allDocumentTexts) {
      generateTextColor(`${tag}`, `${color}`);
    }
  };

  generateLightTextInArray();
};

export { changeTextsColor };
