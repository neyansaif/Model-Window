"use strict";

const modal0 = document.querySelector(".modal");
const modal1 = document.querySelector(".modal2");
const modal2 = document.querySelector(".modal3");

const openmodal0 = document.querySelector(".show-modal");
const openmodal1 = document.querySelector(".show-modal2");
const openmodal2 = document.querySelector(".show-modal3");

const closemodal0 = document.querySelector(".close-modal");
const closemodal1 = document.querySelector(".close-modal2");
const closemodal2 = document.querySelector(".close-modal3");

const overlay = document.querySelector(".overlay");

// function to close window

const close1 = function () {
  modal0.classList.add("hidden");
  overlay.classList.add("hidden");
};
const close2 = function () {
  modal1.classList.add("hidden");
  overlay.classList.add("hidden");
};
const close3 = function () {
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
};

// to open the window

openmodal0.addEventListener("click", function () {
  modal0.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

openmodal1.addEventListener("click", function () {
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

openmodal2.addEventListener("click", function () {
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// to close the window

closemodal0.addEventListener("click", close1);
closemodal1.addEventListener("click", close2);
closemodal2.addEventListener("click", close3);

overlay.addEventListener("click", close1);
overlay.addEventListener("click", close2);
overlay.addEventListener("click", close3);

// close window with escape key

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal0.classList.contains("hidden")) {
      close1();
    }
    if (!modal1.classList.contains("hidden")) {
      close2();
    }
    if (!modal2.classList.contains("hidden")) {
      close3();
    }
  }
});
