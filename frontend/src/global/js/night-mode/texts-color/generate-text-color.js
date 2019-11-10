const generateTextColor = (tagName, color) => {
    const _currentTag = document.querySelectorAll(`${tagName}`);

    for (let tag of _currentTag) {
        tag.style.color = color;
    }
};

export { generateTextColor };
