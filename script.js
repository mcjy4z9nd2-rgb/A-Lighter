const warningCard = document.getElementById("warningCard");
const returnButton = document.getElementById("returnButton");
const infoButton = document.getElementById("infoButton");
const backInfo = document.getElementById("backInfo");

if (warningCard) {
  warningCard.addEventListener("click", function () {
    window.location.href = "detail.html";
  });
}

if (returnButton) {
  returnButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}

if (infoButton && backInfo) {
  infoButton.addEventListener("click", function () {
    backInfo.classList.toggle("show");

    if (backInfo.classList.contains("show")) {
      infoButton.textContent = "收起详细信息";
    } else {
      infoButton.textContent = "查看详细信息";
    }
  });
}
