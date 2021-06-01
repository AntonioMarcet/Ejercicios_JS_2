"use strict";

const alertElement = document.querySelector(".alert");
const messageAlert = document.querySelector(".messageAlert");
const btnDiv = document.querySelector(".submit-input");
const btnSubmit = document.querySelector(".btn-submit");
const nickName = document.querySelector("#nick-name");
const pass = document.querySelector("#pass");
const pass2 = document.querySelector("#pass2");
const email = document.querySelector("#email");
const nameUser = document.querySelector("#name-user");
const surName = document.querySelector("#surname");
const age = document.querySelector("#age");
const phone = document.querySelector("#phone");
const erEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const erNickName = /^[A-Z][\w|\d]*\d$/;
const erPass = /^\d[\w|\d]{6}[A-Z]$/;
const erNameUser = /^[A-Z][\w|\d]*/;
const erSurName = /^[A-Z]\w+\s[A-Z]\w+/;
const erAge = /^\d{2}$/;
const erPhone = /^[679]\d{8}$/;

eventsListeners();

function eventsListeners() {
  nickName.addEventListener("blur", validateForm);
  pass.addEventListener("blur", validateForm);
  pass2.addEventListener("blur", validateForm);
  email.addEventListener("blur", validateForm);
  nameUser.addEventListener("blur", validateForm);
  surName.addEventListener("blur", validateForm);
  age.addEventListener("blur", validateForm);
  phone.addEventListener("blur", validateForm);  
}

function validateForm(e) {
  switch (e.target.id) {
    case "nick-name":
      if (e.target.value.length > 0) {
        if (erNickName.test(e.target.value)) {
          e.target.classList.remove("border-fail");
          e.target.classList.add("border-ok");
          noViewAlert();
        } else {
          e.target.classList.remove("border-ok");
          e.target.classList.add("border-fail");
          let message =
            '"Usuario" debe comenzar por mayúsculas y debe finalizar en un número.';
          viewAlertError(message);
        }
      } else {
        e.target.classList.add("border-fail");
        e.target.classList.remove("border-ok");
        let message = "El campo no puede quedar vacío.";
        viewAlertError(message);
      }
      break;

    case "pass":
      if (e.target.value.length > 0) {
        if (erPass.test(e.target.value)) {
          e.target.classList.remove("border-fail");
          e.target.classList.add("border-ok");
          noViewAlert();
        } else {
          e.target.classList.remove("border-ok");
          e.target.classList.add("border-fail");
          let message =
            '"Contraseña" debe contener 8 caracteres, finalizar con mayúscula y comenzar con un dígito.';
          viewAlertError(message);
        }
      } else {
        e.target.classList.add("border-fail");
        e.target.classList.remove("border-ok");
        let message = "El campo no puede quedar vacío.";
        viewAlertError(message);
      }
      break;

    case "pass2":
      if (e.target.value.length > 0 && pass.classList.contains("border-ok")) {
        if (pass.value === e.target.value) {
          e.target.classList.add("border-ok");
          e.target.classList.remove("border-fail");
          noViewAlert();
        } else {
          e.target.classList.add("border-fail");
          e.target.classList.remove("border-ok");
          let message = "Las contraseñas no coinciden. No copie y pegue.";
          viewAlertError(message);
        }
      } else if (e.target.value.length > 0) {
        e.target.classList.add("border-fail");
        e.target.classList.remove("border-ok");
        let message = "Coloque una contraseña válida.";
        viewAlertError(message);
      } else {
        e.target.classList.add("border-fail");
        e.target.classList.remove("border-ok");
        let message = "El campo no puede quedar vacío.";
        viewAlertError(message);
      }
      break;

    case "email":
      if (e.target.value.length > 0)
        if (erEmail.test(e.target.value)) {
          e.target.classList.remove("border-fail");
          e.target.classList.add("border-ok");
          noViewAlert();
        } else {
          e.target.classList.remove("border-ok");
          e.target.classList.add("border-fail");
          let message = "Ingrese un email válido";
          viewAlertError(message);
        }
      else {
        e.target.classList.add("border-fail");
        e.target.classList.remove("border-ok");
        let message = "El campo no puede quedar vacío.";
        viewAlertError(message);
      }
      break;

    case "name-user":
      if (e.target.value.length > 0)
        if (erNameUser.test(e.target.value)) {
          e.target.classList.remove("border-fail");
          e.target.classList.add("border-ok");
          noViewAlert();
        } else {
          e.target.classList.remove("border-ok");
          e.target.classList.add("border-fail");
          let message = "El nombre debe comenzar por mayúsculas.";
          viewAlertError(message);
        }
      else {
        e.target.classList.add("border-fail");
        e.target.classList.remove("border-ok");
        let message = "El campo no puede quedar vacío.";
        viewAlertError(message);
      }
      break;

    case "surname":
      if (e.target.value.length > 0)
        if (erSurName.test(e.target.value)) {
          e.target.classList.remove("border-fail");
          e.target.classList.add("border-ok");
          noViewAlert();
        } else {
          e.target.classList.remove("border-ok");
          e.target.classList.add("border-fail");
          let message = "Los apellidos deben comenzar por mayúsculas.";
          viewAlertError(message);
        }
      else {
        e.target.classList.add("border-fail");
        e.target.classList.remove("border-ok");
        let message = "El campo no puede quedar vacío.";
        viewAlertError(message);
      }
      break;

    case "age":
      if (e.target.value.length > 0)
        if (erAge.test(e.target.value)) {
          e.target.classList.remove("border-fail");
          e.target.classList.add("border-ok");
          noViewAlert();
        } else {
          e.target.classList.remove("border-ok");
          e.target.classList.add("border-fail");
          let message =
            "La edad debe ser numérico y debes tener mas de 10 años para registrarte.";
          viewAlertError(message);
        }
      else {
        e.target.classList.add("border-fail");
        e.target.classList.remove("border-ok");
        let message = "El campo no puede quedar vacío.";
        viewAlertError(message);
      }
      break;

    case "phone":
      console.log(e.target.value);
      if (e.target.value.length > 0)
        if (erPhone.test(e.target.value)) {
          e.target.classList.remove("border-fail");
          e.target.classList.add("border-ok");
          noViewAlert();
        } else {
          e.target.classList.remove("border-ok");
          e.target.classList.add("border-fail");
          let message =
            "El teléfono debe ser numérico y comenzar por 6, 7 o 9.";
          viewAlertError(message);
        }
      else {
        e.target.classList.add("border-fail");
        e.target.classList.remove("border-ok");
        let message = "El campo no puede quedar vacío.";
        viewAlertError(message);
      }
      break;
  }

  if (
    nickName.value.length !== 0 &&
    pass.value.length !== 0 &&
    pass2.value.length !== 0 &&
    email.value.length !== 0 &&
    nameUser.value.length !== 0 &&
    surName.value.length !== 0 &&
    age.value.length !== 0 &&
    phone.value.length !== 0
  ) {
    btnSubmit.classList.remove("disable");
  }
}

function viewAlertError(message) {
  //Agrega el mensaje del error
  messageAlert.textContent = message;
  alertElement.setAttribute("style", "display: flex;");
  btnDiv.setAttribute("style", "display: none;");
}

function noViewAlert() {
  // Quita el mensaje del error
  alertElement.setAttribute("style", "display: none;");
  btnDiv.setAttribute("style", "display: flex;");
}
