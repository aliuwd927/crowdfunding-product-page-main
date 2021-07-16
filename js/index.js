//Radio Buttons and Modal
const modalContainer = document.querySelector(".modalContainer");
const buttons = document.querySelectorAll(".select_btn");

for (const btnElement of buttons) {
  btnElement.addEventListener("click", (e) => {
    modalContainer.style.display = "block";
  });
}

const radios = document.querySelectorAll(".radio");
for (const radio of radios) {
  radio.addEventListener("change", (e) => {
    const modalContent = document.querySelectorAll(".modal_content");
    for (const content of modalContent) {
      let checkedRadio = content.querySelector(".radio:checked");
      content.querySelector(".money_container").style.display = checkedRadio
        ? "flex"
        : "none";
    }
  });
}

const close_Btn = document.querySelector(".close_container");
close_Btn.addEventListener("click", (e) => {
  modalContainer.style.display = "none";
});

//Progress Bar

//btn_submit onclick, retrieves value from input_amt
const modalSubmitButtons = modalContainer.querySelectorAll(".btn_submit");
for (const button of modalSubmitButtons) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const inputValue = e.target
      .closest("section")
      .querySelector(".input_amt").value;
    updateValue(inputValue);
    updateBackers();
  });
}

const progressbar = document.querySelector(".pBar");
let currentValue = 89914;
const maxValue = 100000;

progressbar.setAttribute("value", currentValue);
progressbar.setAttribute("max", maxValue);

function updateValue(inputValue) {
  if (inputValue.match(/^\d+(\.\d+)?$/)) {
    //updates the current value
    currentValue += parseFloat(inputValue);
    progressbar.setAttribute("value", currentValue);
    //update backer amt innerHTML
    document.querySelector(".current_val").innerHTML =
      currentValue.toLocaleString();
  } else {
    alert("Please enter an amount");
  }
}

const _modalTwo = document.querySelector(".modal_2_container");

function updateBackers() {
  //Update Backer Information
  const endButton = _modalTwo.querySelector("button");
  modalContainer.style.display = "none";
  let currentBackers = document.querySelector(".backers_num").innerText;
  //Convert to number remove comma.
  console.log();
  //End Modal
  _modalTwo.style.display = "block";
  endButton.addEventListener("click", endModalTwo);
}

function endModalTwo() {
  _modalTwo.style.display = "none";
}
/* 


- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

*/

/* 

Todo

After we hit continue, display another modal page
backerstotal++

*/
