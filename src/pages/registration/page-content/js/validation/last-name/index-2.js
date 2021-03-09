function secondValidateLastName() {
  const lastNameContainer = document.querySelector('.last-name');
  const lastNameValue = document.getElementById('last-name').value;

  const helpField = document.createElement('div');
  helpField.className = 'help-field alert bg-danger text-light';

  // Checking repeated helpField
  if (
    lastNameContainer.childElementCount < 3 &&
    (lastNameValue.length < 2 || lastNameValue.length > 30)
  ) {
    document.querySelector('.last-name .help-field').className = 'd-none';
  }

  // Checking symbols count
  else {
    if (lastNameValue.length < 2 || lastNameValue.length > 30) {
      helpField.innerHTML = 'Фамилия должна содержать от 2 до 30 букв.';
      lastNameContainer.appendChild(helpField);
    }

    // Checking field type
    else {
      let isNotLetter = false;

      for (let letter of lastNameValue) {
        if (typeof letter !== String) {
          isNotLetter = true;
        }
      }

      if (isNotLetter) {
        helpField.innerHTML = 'Фамилия не должна содержать цифр и символов.';
        lastNameContainer.appendChild(helpField);
      } else {
        document.querySelector('.last-name .help-field').className = 'd-none';
      }
    }
  }
}

export default secondValidateLastName;
