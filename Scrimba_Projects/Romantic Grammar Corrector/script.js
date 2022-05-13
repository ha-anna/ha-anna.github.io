document.getElementById("btn").addEventListener("click", () => {
  const message = document.getElementById("paragraph");
  let string = message.textContent;
  let capitalStr = string.charAt(0).toUpperCase();
  let lowerCaseStr = string.slice(1).toLowerCase();
  message.textContent = `${capitalStr}${lowerCaseStr}`;
});
