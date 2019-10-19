const generateDarkBackground = (tagName) => {
    const currentTag = document.querySelectorAll(`${tagName}`);

    for (let tag of currentTag) {
        tag.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    }
};

export { generateDarkBackground };