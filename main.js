const screen1 = document.querySelector(".screenone");
const screen2 = document.querySelector(".screentwo");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const pAlerta = document.querySelector(".alerta");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

const handleTryClick = (event) => {
  console.log(event);
  event.preventDefault();
  const inputNumber = document.querySelector("#inputNumber");

  if (inputNumber.value === "") {
    alert("O input nao pode estar vazio, Abestaddoooooo");
  }

  if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    alert("Numero deve ser entre 0 e 10!! ABESTADOOOO");
  }

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();
    document.querySelector(
      ".screentwo h2"
    ).innerText = `Voce acertou em ${xAttempts} tentativas`;
  }
  pAlerta.innerText = `Resposta erradas ${xAttempts}, tente denovo`;
  inputNumber.value = "";
  xAttempts++;
};

const handleResetClick = () => {
  toggleScreen();
  randomNumber = Math.round(Math.random() * 10);
  xAttempts = 1;
  pAlerta.innerText = "";
};

const toggleScreen = () => {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
};

const handleEnter = (e) => {
  if (e.key === "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
};

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", handleEnter);
