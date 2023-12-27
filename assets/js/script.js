"use strict";
// Selectors
const body = document.querySelector("body");
const btnMode = document.querySelector(".btn--mode");
const btnOutlined = document.querySelector(".btn--outlined");
const iconBtn = document.querySelector(".btn-icon");

const containerAboutIcons = document.querySelector(".about__icons");
const containerProjects = document.querySelector(".project__list");
const yearEl = document.querySelector(".year");

const form = document.querySelector(".form");
const inputName = document.querySelector(".form__input--name");
const inputEmail = document.querySelector(".form__input--email");
const inputMessage = document.querySelector(".form__input--message");
const btnSubmit = document.querySelector(".btn--submit");

const serviceID = "service_w8p44qn";
const templateID = "template_uddjp6i";

// Toggle dark mode
const switchBtnIcon = function () {
  iconBtn.getAttribute("name") === "moon"
    ? iconBtn.setAttribute("name", "sunny")
    : iconBtn.setAttribute("name", "moon");
};

const darkMode = function () {
  body.classList.toggle("dark-mode");
  switchBtnIcon();
};

btnMode.addEventListener("click", darkMode);

// Display Skills
const skills = {
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  SASS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  jQuery:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
  Bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
  Tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  Bulma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg",
  Foundation:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/foundation/foundation-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Vue: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  NodeJs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
};

const displaySkills = function () {
  Object.keys(skills).forEach((skill) => {
    const html = `
        <img
          src="${skills[skill]}"
          class="icon--skill"
          alt="${skill} icon"
        />
    `;
    containerAboutIcons.insertAdjacentHTML("beforeend", html);
  });
};
displaySkills();

// Display Projects
const projects = {
  firstProject: {
    title: "front-end-mentor-challenges",
    link: "https://jc-ve.github.io/front-end-mentor-challenges/",
    desc: "Compilation of the challenges I finished from Front-End Mentor.",
  },
  secondProject: {
    title: "codewell-challenges",
    link: "https://jc-ve.github.io/codewell-challenges/",
    desc: "Compilation of the challenges I finished from Codewell.",
  },
  thirdProject: {
    title: "css-frameworks-projects",
    link: "https://jc-ve.github.io/css-frameworks-projects/",
    desc: "Compilation of free templates I created using different CSS Frameworks.",
  },
};

const displayProjects = function () {
  Object.values(projects).forEach((project) => {
    const html = `
    <li class="project__item">
      <ion-icon name="caret-forward-outline" class="icon--bullet"></ion-icon>
        <div>
          <a href="${project.link}" target="_blank"
             class="project__link u-margin-bottom-xs">${project.title}</a>
          <p class="paragraph project__description">${project.desc}</p>
        </div>
    </li>
    `;

    containerProjects.insertAdjacentHTML("beforeend", html);
  });
};
displayProjects();

// Email JS
const emailJSInit = (function () {
  emailjs.init("kxj3uQ8ds5Jateqaq");
})();

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

// Get current year
const date = new Date();
const currentYear = date.getFullYear();
yearEl.textContent = currentYear;
