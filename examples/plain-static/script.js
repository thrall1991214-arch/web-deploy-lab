const result = document.querySelector("#result");
const button = document.querySelector("#check");

button.addEventListener("click", () => {
  result.textContent = `Browser check passed at ${new Date().toLocaleTimeString()}.`;
});
