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
});
