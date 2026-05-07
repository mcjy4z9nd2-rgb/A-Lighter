const warningCard = document.getElementById("warningCard");
const adImageBox = document.getElementById("adImageBox");

const hintText = document.getElementById("hintText");
const collapseText = document.getElementById("collapseText");

const infoButton = document.getElementById("infoButton");
const backInfo = document.getElementById("backInfo");

warningCard.addEventListener("click", function () {
  adImageBox.classList.add("show");
  collapseText.classList.add("show");
  hintText.classList.add("hide");
  infoButton.classList.add("show");
});

collapseText.addEventListener("click", function () {
  adImageBox.classList.remove("show");
  collapseText.classList.remove("show");
  hintText.classList.remove("hide");
  infoButton.classList.remove("show");

  backInfo.classList.remove("show");
  infoButton.textContent = "查看详细信息";
});

infoButton.addEventListener("click", function () {
  backInfo.classList.toggle("show");

  if (backInfo.classList.contains("show")) {
    infoButton.textContent = "收起详细信息";
  } else {
    infoButton.textContent = "查看详细信息";
  }
});