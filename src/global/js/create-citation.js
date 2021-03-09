document.oncopy = () => {
  let selectedText = document.getSelection().toString();

  const firstLetter = selectedText.charAt(0);
  const lastLetter = selectedText.charAt(selectedText.length - 1);

  if (firstLetter === firstLetter.toLowerCase()) {
    selectedText = `...${selectedText}`;
  }

  if (
    lastLetter !== '.' &&
    lastLetter &&
    '...' &&
    lastLetter !== '?' &&
    lastLetter !== '!'
  ) {
    selectedText = `${selectedText}...`;
  }

  // Добавить условие: если первое слово выделено не полностью, то выделить его в полном виде.
  // Добавить условие: если последнее слово выделено не полностью, то выделить его в полном виде.

  let date = new Date();
  let day = date.getDay().toString();
  let month = date.getMonth().toString();
  let year = date.getFullYear().toString();
  const currentURLPath = window.location.pathname;

  if (day.length < 2) {
    day = `0${day}`;
  }

  if (month.length < 2) {
    month = `0${month}`;
  }

  alert(
    `«${selectedText}» (источник: university-checklist.ru${currentURLPath}; дата обращения: ${day}.${month}.${year}).`
  );

  // Заменить alert на команду копирования текста. Чтобы реализовать, понадобится знание о работе буфера обмена.
};
