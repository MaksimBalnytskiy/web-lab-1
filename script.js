document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("actionBtn");
  const statusBox = document.getElementById("statusMessage");

  button.addEventListener("click", () => {
    statusBox.textContent = "Середовище налаштовано коректно. Скрипти працюють.";
    statusBox.style.color = "#3fb950";
    console.log("Lab 1: DOM event successfully processed.");
  });
});