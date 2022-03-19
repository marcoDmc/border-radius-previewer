const leftTop = document.querySelector("#container__left-top");
const leftBottom = document.querySelector("#container__bottom-left");
const rightTop = document.querySelector("#container__right-top");
const rightBottom = document.querySelector("#container__bottom-right");
const radius = document.querySelector(".radius");
const resultSeletor = document.querySelector(".result__seletor");
const buttonCopy = document.querySelector("#result__button-copy");

const px = "px";
const porcent = "%";
let leftT;
let rightT;
let rightB;
let leftB;

function handleBorderLeftTop(event) {
  const value = event.target.value;
  if (value.includes(px) || value.includes(porcent)) {
    radius.style.borderTopLeftRadius = `${value}`;
    leftT = value;
    handleRefreshResultCss();
  } else {
    radius.style.borderTopLeftRadius = "initial";
    radius.style.transition = ".4s ease";
    leftT = "";
  }
}

function handleBorderLeftBottom(event) {
  const value = event.target.value;
  if (value.includes(px) || value.includes(porcent)) {
    radius.style.borderBottomLeftRadius = `${value}`;
    leftB = value;
    handleRefreshResultCss();
  } else {
    radius.style.borderBottomLeftRadius = "initial";
    radius.style.transition = ".4s ease";
    leftB = "";
  }
}

function handleBorderRightTop(event) {
  const value = event.target.value;
  if (value.includes(px) || value.includes(porcent)) {
    radius.style.borderTopRightRadius = `${value}`;
    rightT = value;
    handleRefreshResultCss();
  } else {
    radius.style.borderTopRightRadius = "initial";
    radius.style.transition = ".4s ease";
    rightT = "";
  }
}

function handleBorderRightBottom(event) {
  const value = event.target.value;
  if (value.includes(px) || value.includes(porcent)) {
    radius.style.borderBottomRightRadius = `${value}`;
    rightB = value;
    handleRefreshResultCss();
  } else {
    radius.style.borderBottomRightRadius = "initial";
    radius.style.transition = ".4s ease";
    rightB = "";
  }
}
leftTop.addEventListener("keyup", handleBorderLeftTop);
leftBottom.addEventListener("keyup", handleBorderLeftBottom);
rightTop.addEventListener("keyup", handleBorderRightTop);
rightBottom.addEventListener("keyup", handleBorderRightBottom);

function handleRefreshResultCss() {
  if (!leftT || !leftB) {
    return;
  } else if (!rightT || !rightB) {
    return;
  } else {
    resultSeletor.value = `border-radius:${leftT} ${rightT} ${rightB} ${leftB};`;
  }
}

function handleCopyTextResult() {
  if (!resultSeletor || resultSeletor.value === "waiting...") return;

  resultSeletor.select();
  navigator.clipboard.writeText(resultSeletor.value);
  alert("copying successfully");
}

buttonCopy.addEventListener("click", handleCopyTextResult);
