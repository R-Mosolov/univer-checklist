import { generateBackgroundColor } from "./generate-background-color";

const generateBackgroundsColor = function (color: string) {
  const generateBackgroundsColorInArray = () => {
    const _allDocumentBackgrounds: string[] = [
      ".App",
      ".site-header",
      ".site-header .dropdown-menu",
      ".card-background",
    ];

    for (let tag of _allDocumentBackgrounds) {
      generateBackgroundColor(`${tag}`, `${color}`);
    }
  };

  return generateBackgroundsColorInArray();
};

export { generateBackgroundsColor };
