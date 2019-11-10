import secondValidateLastName from './last-name/index-2';

const validateRegistrationForm = (event) => {
    event.preventDefault();

    secondValidateLastName();
};

export default validateRegistrationForm;
