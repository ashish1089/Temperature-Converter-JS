
const inputField = document.querySelector(".input-field")
const Celsius = document.querySelector("#celsius")
const Fahrenheit = document.querySelector("#fahrenheit")
const Kelvin = document.querySelector("#kelvin")

inputField.addEventListener('input', (e) => {
    const celsius = () => {
        if (e.target.id == 'celsius') {
            const C = parseFloat(e.target.value);
            Fahrenheit.value = ((C * 1.8) + 32).toFixed(3);
            Kelvin.value = (C + 273.15).toFixed(3);
        }
    }

    const fahrenheit = () => {
        if (e.target.id == 'fahrenheit') {
            const F = parseFloat(e.target.value);
            Celsius.value = ((F - 32) * 5 / 9).toFixed(3);
            Kelvin.value = ((F - 32) * 5 / 9 + 273.15).toFixed(3);
        }
    }

    const kelvin = () => {
        if (e.target.id == 'kelvin') {
            const K = parseFloat(e.target.value);
            Celsius.value = ((K - 273.15)).toFixed(3);
            Fahrenheit.value = ((K - 273.15) * 9 / 5 + 32).toFixed(3);
        }
    }

    celsius();
    fahrenheit();
    kelvin();
})

