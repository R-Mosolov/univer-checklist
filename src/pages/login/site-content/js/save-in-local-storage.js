document.addEventListener('DOMContentLoaded', () => {
    let email = document.querySelector('.login__email');

    email.setAttribute('value', `${localStorage.getItem('userData')}`);
});

const saveInLocalStorage = () => {
    let email = document.querySelector('.login__email');

    localStorage.setItem('userData', `${email.value}`);
};

export { saveInLocalStorage };