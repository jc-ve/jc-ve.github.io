"use strict";

const yearEl = document.querySelector(".year");
const date = new Date();
const currentYear = date.getFullYear();

yearEl.textContent = currentYear;
