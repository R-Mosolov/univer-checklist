const generateLightText = (tagName) => {
    const currentTag = document.querySelectorAll(`${tagName}`);

    for (let tag of currentTag) {
        tag.style.color = 'white';
    }
};

export { generateLightText };