"use strict";
// Selectors
const yearEl = document.querySelector(".year");

const form = document.querySelector(".form");
const inputName = document.querySelector(".form__input--name");
const inputEmail = document.querySelector(".form__input--email");
const inputMessage = document.querySelector(".form__input--message");
const btnSubmit = document.querySelector(".btn--submit");

const serviceID = "service_w8p44qn";
const templateID = "template_uddjp6i";

// const Swal = require("sweetalert2");

// Get current year

const date = new Date();
const currentYear = date.getFullYear();

yearEl.textContent = currentYear;

// Email JS
const emailJSInit = (function () {
  emailjs.init("kxj3uQ8ds5Jateqaq");
})();

const alertMessage = function () {};

const sendMail = function () {
  const params = {
    name: inputName.value,
    email: inputEmail.value,
    message: inputMessage.value,
  };

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      inputName.value = "";
      inputEmail.value = "";
      inputMessage.value = "";
      Swal.fire({
        title: "Email sent successfully",
        text: "Your message has been sent.",
        icon: "success",
        iconColor: "#62929e",
        confirmButtonText: "Close",
        confirmButtonColor: "#62929e",
      });
    })
    .catch((err) =>
      Swal.fire({
        title: "Oops..",
        text: `Something went wrong. ${err}`,
        icon: "error",
        confirmButtonText: "Close",
        confirmButtonColor: "#62929e",
      })
    );
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  sendMail();
});
