const modalContainer = document.querySelector(".modalContainer");
const btn = document.querySelectorAll(".select_btn");

for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener("click", e =>{
    // console.log(e);
    modalContainer.style.display = "block";
  });
};

const close_Btn = document.querySelector('.close_container');
close_Btn.addEventListener('click',e=>{
  modalContainer.style.display = 'none';
});

const progressbar = document.querySelector('.pBar');
const currentValue = 89914;
const maxValue = 100000;

progressbar.setAttribute('value',currentValue);
progressbar.setAttribute('max',maxValue);

// When money gets added thru modal, currentValue + addedValue = new CurrentValue;

const modalBtn = document.querySelectorAll(".btn_submit");
const inputValue = document.querySelectorAll('.input_amt');
for(let i = 0; i < modalBtn.length;i++){
 modalBtn[i].addEventListener('click',e =>{
    for(let j = 0; j < inputValue.length;j++){
      console.log(inputValue[j].value)
      //write a condition that checks each input value. 
    };
 });
};
// When Continue is clicked, get value
// After value is retrieved add to currentValue. 
// For Bamboo stand and Black stand, innerText Value reduced by 1 for every click.


/* 

for(modalBtn){
  let someValue;
  for(inputValue){
    someValue = input[i].value
  }
}


https://www.w3schools.com/jsref/prop_checkbox_checked.asp

*/