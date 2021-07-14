const modalContainer = document.querySelector(".modalContainer");
const buttons = document.querySelectorAll(".select_btn");

/* for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (e) => {
    // console.log(e);
    modalContainer.style.display = "block";
    const checkedRadio = document.querySelectorAll(".radio");
    for (let j = 0; j < checkedRadio.length; j++) {
      checkedRadio[j].addEventListener("click", (e) => {
        //console.log(checkedRadio[j].checked);
        const moneyContainer = document.querySelectorAll(".money_container");
        if (checkedRadio[j].checked) {
          console.log(moneyContainer[j]);
          moneyContainer[j].style.display = "flex";
        }
      });
    }
  });
}
 */

for (const btnElement of buttons) {
  btnElement.addEventListener("click", (e) => {
    modalContainer.style.display = "block";
    const radios = document.querySelectorAll(".radio");
    for (const radio of radios) {
      radio.addEventListener("change", (e) => {
        console.log(e);
      });
    }
  });
}

const close_Btn = document.querySelector(".close_container");
close_Btn.addEventListener("click", (e) => {
  modalContainer.style.display = "none";
});

const progressbar = document.querySelector(".pBar");
const currentValue = 89914;
const maxValue = 100000;

progressbar.setAttribute("value", currentValue);
progressbar.setAttribute("max", maxValue);

/* 
livid46: you need to add an event listener for 'change'
livid46: that way, it fires for both check or unchecked
livid46: instead of click
livid46: and simply check the event.target or event.srcElement
*/

/* 
RyMeRcYbLe: i would create variable store some unique identifier 
and everytime check if newly clicked one is same or different 
and if its different then query previous one and hide it
*/
