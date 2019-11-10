import validateLastName from './last-name';

const validateRegistrationForm = (event) => {
    event.preventDefault();

    validateLastName();
};

export default validateRegistrationForm;
