'use strict';
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);

const openModal = function () {
  console.log(`button clicked`);
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener(`click`, openModal);

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener(`click`, function () {
//     console.log(`button clicked`);
//     modal.classList.remove(`hidden`);
//     overlay.classList.remove(`hidden`);
// });
//    ---> refactored, moved as a function named "openModal"

// btnCloseModal.addEventListener(`click`, closeModal);
//   modal.classList.add(`hidden`);
//   overlay.classList.add(`hidden`);
// }); -------> We moved it as a function "Close Modal" to reused it with the overlay call (to close the modal when clicking on the overlay background)

overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (e) {
  console.log(e.key);
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    // if (!modal.classList.contains(`hidden`)) --> same as what comes after the &&
    closeModal();
  }
});
// when using document., all actions on the whole document will trigger it

// Javascript, call this function when a keyword event happen and when you do so, place the "event" function as an argument
