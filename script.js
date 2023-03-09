const home = document.getElementById("home");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const experience = document.getElementById("experience");
const mainContent = document.getElementById("main-content");

const navLinks = Array.from(document.querySelectorAll(".link"));

navLinks.forEach(function (highlight) {
  highlight.addEventListener("click", highlightLink);
});

function highlightLink(e) {
  navLinks.forEach((button) => button.classList.remove("active"));
  e.target.classList.add("active");
}

function showHome(e) {
  e.preventDefault();
  mainContent.innerHTML = "";
  let mainContentElement = document.createElement("div");
  mainContentElement.innerHTML = `
    <h1 class="animate__animated animate__fadeInUp">John Christopher Enriquez</h1>
    <p class="animate__animated animate__fadeInUp">Front-End Developer</p>
  `;
  mainContent.appendChild(mainContentElement);
}

function showAbout(e) {
  e.preventDefault(e);
  mainContent.innerHTML = "";
  let mainContentElement = document.createElement("div");
  mainContent.innerHTML = `
  <h1 class="animate__animated animate__fadeInUp">About</h1>
  <p class="animate__animated animate__fadeInUp">My name is John Christopher V. Enriquez and I enjoy translating designs into existence.</p>
  <div class="content-block">
      <h2>Certifications</h2>
      <li>
        <a href="https://www.freecodecamp.org/certification/fccc86baeb8-d403-46f1-b0a5-ce2325302b6b/responsive-web-design" target="_blank">Responsive Web Design</a>
      </li>
      <li>
        <a href="files/HTML & CSS Certificate.pdf" target="_blank">HTML & CSS Certification</a>
      </li>
      <li>
        <a href="files/John Christopher V. Enriquez Free Coding Bootcamp - Certificate of Participation.pdf" target="_blank">Zuitt Free Coding Bootcamp</a>
      </li>
  </div>
  <a href="files/Enriquez_Resume.pdf" target="_blank" class="download-btn">Download Resume</a>
  `;
  mainContent.appendChild(mainContentElement);
}

function showProjects(e) {
  e.preventDefault(e);
  mainContent.innerHTML = "";
  let mainContentElement = document.createElement("div");
  mainContent.innerHTML = `
  <h1 class="animate__animated animate__fadeInUp">Projects</h1>
  <div class="animate__animated animate__fadeInUp">
    <div class="content-block">
      <h2>CSS</h2>
      <small>(All of the mentioned projects below are mockup websites.)</small>
      <li>
        <a href="https://jc-enriquez.github.io/digitalestate-project/" target="_blank">Real Estate</a>
      </li>
      <li>
        <a href="https://jc-enriquez.github.io/litrato-project/" target="_blank">Photography Company</a>
      </li>
      <li>
        <a href="https://jc-enriquez.github.io/arkitektura-project/" target="_blank">Architecture Firm</a>
      </li>
    </div>
    <div class="content-block">
      <h2>JavaScript</h2>
      <small>(All of the mentioned projects below are API based.)</small>
      <li>
        <a href="https://jc-enriquez.github.io/openweathermap-api-project/" target="_blank">Klima</a>
      </li>
      <li>
        <a href="https://jc-enriquez.github.io/newsapi-project" target="_blank">Pahayagan</a>
      </li>
      <li>
        <a href="https://jc-enriquez.github.io/tmdb-api-project/" target="_blank">Tanghalan</a>
      </li>
      <li>
        <a href="https://jc-enriquez.github.io/themealdb-api-project/" target="_blank">Kubyertos</a>
      </li>
    </div>
  </div>
  `;
  mainContent.appendChild(mainContentElement);
}

function showExperience(e) {
  e.preventDefault(e);
  mainContent.innerHTML = "";
  let mainContentElement = document.createElement("div");
  mainContent.innerHTML = `
  <h1 class="animate__animated animate__fadeInUp">Experience</h1>
  <div class="animate__animated animate__fadeInUp">
    <div class="content-block experience">
      <h2>Front-End Developer (Intern)</h2>
      <h4>Cobra Itech Services Corporation</h4>
      <small>May 2022 - August 2022</small>
      <li>Prototyped and developed website for the company and the CEO.</li>
      <li>Maintained and managed content of the company's learning platform.</li>
      <li>Conducted research about the medical industry here in the Philippines.</li>
    </div>
    <div class="content-block experience">
      <h2>Digital Specialist (Intern)</h2>
      <h4>Asia DTWords 24/7 Philippines Inc.</h4>
      <small>September 2022 - December 2022</small>
      <li>Content enrichment tasks.</li>
      <li>Handled image and SEO optimization tasks.</li>
      <li>Content integration, localization, and migration tasks.</li>
    </div>
  </div>
  `;
  mainContent.appendChild(mainContentElement);
}

home.addEventListener("click", showHome);
about.addEventListener("click", showAbout);
projects.addEventListener("click", showProjects);
experience.addEventListener("click", showExperience);
