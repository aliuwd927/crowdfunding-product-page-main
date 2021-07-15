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
    const inputValues = modalContainer
      .querySelectorAll("section")
      .forEach((section) => {
        console.log(section.querySelector("button"));
      });
  });
}

const progressbar = document.querySelector(".pBar");
const currentValue = 89914;
const maxValue = 100000;

progressbar.setAttribute("value", currentValue);
progressbar.setAttribute("max", maxValue);

/* 

- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

*/

/* 

P_G_: like querySelectorAll('section').forEach(section) { section.querySelector('button'); })

modalContainer.querySelectorAll('.class-of-a-section').forEach(section => {
  // here 'section' is now the thing you work on
  const button = section.querySelector('.my-button');
  const input = section.querySelector('.my-input');
 
  // TODO: do something with it
});



*/
