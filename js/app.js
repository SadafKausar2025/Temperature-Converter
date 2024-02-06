const celciusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celciusField.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelcius();

  convertBtn.innerHTML =
    "<span><i class='fa fa-spinner fa-spin'></i>Converting...</span>";
  setTimeout(() => {
    convertBtn.innerHTML = "<span>Convert</span>";
  }, 1000);
});

function convertToCelcius() {
  let inputValue = degree.value;

  setTimeout(() => {
    if (tempType.value === "fahrenheit") {
      const fahrenheitToCelcius = (inputValue - 32) * (5 / 9);
      celciusField.innerHTML = `${fahrenheitToCelcius.toFixed(3)} &degc`;
    } else if (tempType.value === "kelvin") {
      const kelvinToCelsius = inputValue - 273.15;
      celciusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &degc`;
    }
  }, 1100);
}
