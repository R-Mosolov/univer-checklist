const generateLightText = (tagName, color) => {
    const currentTag = document.querySelectorAll(`${tagName}`);

    for (let tag of currentTag) {
        tag.style.color = color;
    }
};

export { generateLightText };