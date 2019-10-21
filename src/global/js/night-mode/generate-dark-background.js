const generateDarkBackground = (tagName, color) => {
    const currentTag = document.querySelectorAll(`${tagName}`);

    for (let tag of currentTag) {
        tag.style.backgroundColor = color;
    }
};

export { generateDarkBackground };