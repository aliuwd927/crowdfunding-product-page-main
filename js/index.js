const modalContainer = document.querySelector("#modal");

const btn = document.querySelectorAll("#select_btn");

for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener("click", e =>{
    // console.log(e);
    modalContainer.style.display = "flex";
  });
};