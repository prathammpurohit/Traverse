const hiddenStat = document.querySelector(".hidden-stats");
const pic = document.querySelector(".profile-picture");
const anchor = document.createElement("a");
const icon = document.createElement("i");
icon.style.color = "#0b68a0";
anchor.appendChild(icon);
hiddenStat.appendChild(anchor);
const sameFunction = () => {
  hiddenStat.style.display = "flex";
  hiddenStat.classList.add("move");
  hiddenStat.classList.remove("move-back");
  pic.classList.remove("color-change-back");
};
const tapInfo = () => {
  sameFunction();
  hiddenStat.style.backgroundColor = "rgb(178 164 255 / 75%)";
  pic.style.backgroundColor = "rgb(178 164 255 / 75%)";
  icon.innerText = "Portfolio";
  anchor.href = "./pages/information.html";
};
const tapShake = () => {
  sameFunction();
  hiddenStat.style.backgroundColor = "rgb(240 125 234 / 70%)";
  pic.style.backgroundColor = "rgb(240 125 234 / 70%)";
  icon.innerText = "Drop Mail";
  anchor.href = "mailto:prathammpurohit@hotmail.com";
};

const tapLink = () => {
  sameFunction();
  hiddenStat.style.backgroundColor = "rgb(243 120 120 / 70%)";
  pic.style.backgroundColor = "rgb(243 120 120 / 70%)";
  icon.innerText = "Contribute/Get Code";
  anchor.href = "https://github.com/prathammpurohit/Traverse";
};

const tapDefault = () => {
  hiddenStat.classList.add("move-back");
  pic.classList.add("color-change-back");
};
