
const inputField = document.querySelector(".input-field")
const Celsius = document.querySelector("#celsius")
const Fahrenheit = document.querySelector("#fahrenheit")
const Kelvin = document.querySelector("#kelvin")

inputField.addEventListener('input', (e) => {
    console.log(e.target);
    console.log(e.target.value);
})

