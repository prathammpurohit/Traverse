const hiddenStat = document.querySelector(".hidden-stats");
const hiddenStat2 = document.querySelector(".hidden-stats-bottom");
const pic = document.querySelector(".profile-picture");
const anchor = document.createElement("a");
const icon = document.createElement("i");
const iframe=document.querySelector('iframe');
icon.style.color = "#0b68a0";
anchor.appendChild(icon);
hiddenStat.appendChild(anchor);
hiddenStat2.appendChild(iframe);
const sameFunction = () => {
  hiddenStat.style.display = "flex";
  hiddenStat.classList.add("move");
  hiddenStat2.style.display = "flex";
  hiddenStat2.classList.add("move-bottom");
  hiddenStat.classList.remove("move-back");
  hiddenStat2.classList.remove("move-bottom-back");
  pic.classList.remove("color-change-back");
};
const tapInfo = () => {
  sameFunction();
  hiddenStat.style.backgroundColor = "rgb(178 164 255 / 75%)";
  hiddenStat2.style.backgroundColor = "rgb(178 164 255 / 75%)";
  pic.style.backgroundColor = "rgb(178 164 255 / 75%)";
  icon.innerText = "Portfolio";
  anchor.href = "./pages/information.html";
  iframe.src='https://assets.pinterest.com/ext/embed.html?id=803611127277834320';
};
const tapShake = () => {
  sameFunction();
  hiddenStat.style.backgroundColor = "rgb(240 125 234 / 70%)";
  hiddenStat2.style.backgroundColor = "rgb(240 125 234 / 70%)";
  pic.style.backgroundColor = "rgb(240 125 234 / 70%)";
  icon.innerText = "Drop Mail";
  anchor.href = "mailto:prathammpurohit@hotmail.com";
  iframe.src='https://www.youtube.com/embed/-bm5uANZCUA?controls=0'
};

const tapLink = () => {
  sameFunction();
  hiddenStat.style.backgroundColor = "rgb(243 120 120 / 70%)";
  hiddenStat2.style.backgroundColor = "rgb(243 120 120 / 70%)";
  pic.style.backgroundColor = "rgb(243 120 120 / 70%)";
  icon.innerText = "Contribute/Get Code";
  anchor.href = "https://github.com/prathammpurohit/Traverse";
  iframe.src='https://assets.pinterest.com/ext/embed.html?id=803611127275612280';
};

const tapDefault = () => {
  hiddenStat.classList.add("move-back");
  hiddenStat2.classList.add("move-bottom-back");
  pic.classList.add("color-change-back");
};
