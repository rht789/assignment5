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
  const historyContainer = document.getElementById("history-container");
  const clearHistoryButton = document.getElementById("clear-history");
  let coinCount = 100;

  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
  }

  function addToHistory(serviceName, hotlineNumber) {
    const currentTime = getCurrentTime();
    const historyEntry = document.createElement("div");
    historyEntry.classList.add(
      "flex",
      "items-center",
      "justify-between",
      "py-2",
      "border-b",
      "border-gray-100"
    );

    historyEntry.innerHTML = `
      <div>
        <h3 class="text-sm md:text-base font-medium">${serviceName}</h3>
        <p class="text-xs md:text-sm text-gray-600">${hotlineNumber}</p>
      </div>
      <div class="text-xs md:text-sm text-gray-500">
        ${currentTime}
      </div>
    `;

    historyContainer.appendChild(historyEntry);
  }

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

      addToHistory(serviceName, hotlineNumber);
    });
  }

  clearHistoryButton.addEventListener("click", function () {
    historyContainer.innerHTML = "";
  });
});
