function validateForm(e) {
  console.log(e);
  e.preventDefault();
  const name = document.testForm.name.value;
  const email = document.testForm.email.value;
  const phone = document.testForm.phone.value;

  if (name.length == 0) {
    return openPopout('Поле "Имя" должно содержать минимум 1 символ');
  }
  if (name.length > 16) {
    return openPopout('Поле "Имя" должно содержать не более 16 символов');
  }
  if (!validateEmail(email)) {
    return openPopout('Поле "E-mail" введено не верно');
  }
  if (!phone.startsWith("+7")) {
    return openPopout('Поле "Телефон" должно начинаться с +7');
  }
  if (!validatePhone(phone)) {
    return openPopout('Поле "Телефон" введено неверно');
  }
  return (window.location = "congrats.html");
}
