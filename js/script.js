// Heart icon functionality
document.addEventListener("DOMContentLoaded", function () {
  const heartCountElement = document.getElementById("heart-count");
  const hearts = document.querySelectorAll(".heart-icon");
  let heartCount = 0;

  for (const heart of hearts) {
    heart.addEventListener("click", function () {
      heartCount++;
      heartCountElement.innerText = heartCount;
    });
  }

  const coinCountElement = document
    .getElementById("coin-count")
    .querySelector("p");
  const callButtons = document.querySelectorAll(".call-button");
  let coinCount = 100;

  for (const callButton of callButtons) {
    callButton.addEventListener("click", function () {
      if (coinCount < 20) {
        alert("You don't have enough coins! You need 20 coins to make a call.");
        return;
      }

      const card = this.parentElement.parentElement;
      const serviceName = card.querySelector(".service-name").innerText;
      const hotlineNumber = card.querySelector(".hotline-number").innerText;

      const alertMessage = `📞 Calling ${serviceName} ${hotlineNumber}...`;
      alert(alertMessage);

      coinCount -= 20;
      coinCountElement.innerText = coinCount;
    });
  }
});
