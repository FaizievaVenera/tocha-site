const button = document.querySelector(".popup__button-register");
//let input = document.querySelectorAll("input");
const small = document.querySelector("small");
const registerForm = document.querySelector(".form-register");
let inputRegister = registerForm.querySelectorAll("input");

button.addEventListener("click", submit);

function submit(e) {
  e.preventDefault();
  for (let i = 0; i < inputRegister.length; i++) {
    let currentInput = inputRegister[i];
    //Проверка
    if (currentInput.value === "") {
      currentInput.classList.add("error");
      const errorDiv = document.createElement("div");
      errorDiv.textContent = "Введите данные";
      let divInput = currentInput.parentElement;
      errorDiv.classList.add("check");
      divInput.appendChild(errorDiv);
    } else {
    }
  }
}

/*<div class="check">Введите данные</div>*/
