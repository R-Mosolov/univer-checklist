const generateBackgroundColor = (tagName, color) => {
    const _currentTag = document.querySelectorAll(`${tagName}`);

    for (let tag of _currentTag) {
        tag.style.backgroundColor = color;
    }
};

export { generateBackgroundColor };
