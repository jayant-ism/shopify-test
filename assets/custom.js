const showModal = () =>
  (document.querySelector(".custom_modal").style.display = "block");
const hideModal = () =>
  (document.querySelector(".custom_modal").style.display = "none");

document.querySelector("#modalbtn").onclick = function () {
  showModal();
};

document.querySelector("#closebtn").onclick = function () {
  hideModal();
};

document.addEventListener("DOMContentLoaded", (event) => {
  showModal();
});
