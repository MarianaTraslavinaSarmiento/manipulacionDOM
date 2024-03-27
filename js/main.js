let nameCar = document.getElementById("nameCar")
let buttonText = document.getElementById("buttonText")

nameCar.textContent="Lamborghini"

buttonText.addEventListener("click", comprado)

function comprado(){
    buttonText.textContent="¡Agregado!"
    buttonText.style.color="black"
    buttonText.style.backgroundColor="white"
}
