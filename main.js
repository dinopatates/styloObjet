const colorPicker = document.querySelector(".colorPicker")
const colorInput = document.querySelector(".colorInput")
const inkBar = document.querySelector(".inkBar")
const inkBarContainer = document.querySelector(".inkBarContainer")
const writtenText = document.querySelector("#writtenText")
const capSwitch = document.querySelector("#capSwitch")
const switchContainer = document.querySelector(".slider")
const writeButton = document.querySelector("#write")
const writingPart = document.querySelector(".writingPart")
const refillButton = document.querySelector(".refillButton")
const body = document.querySelector("body")


let selectedColor = colorInput.value
writingPart.style.color = selectedColor
let inkValue = 100
let isCapOpened = true

function Stylo(color) {
    this.color = color;
    this.level = 100;
    this.opened = false

    this.write = function(text){
        
    }
}

refillButton.addEventListener("click", function () {
    refillButton.style.borderColor = "rgb(119, 255, 119)"
    switchContainer.style.borderColor = "rgb(119, 255, 119)"
    inkValue = 100
    inkBar.value = inkValue
    console.log("ink value: " + inkValue)
})

capSwitch.addEventListener("change", function () {
    console.log(capSwitch.checked)
    if (capSwitch.checked === true) {
        isCapOpened = true
    }
    else {

        isCapOpened = false
    }
})

writeButton.addEventListener("click", function () {
    refillButton.style.borderColor = "rgb(119, 255, 119)"
    switchContainer.style.borderColor = "rgb(119, 255, 119)"
    if (isCapOpened === true && inkValue > 0) {
        const printedText = document.createElement("p")
        printedText.textContent = writtenText.value
        printedText.style.color = colorInput.value
        writingPart.appendChild(printedText)
        inkValue -= 10
        inkBar.value = inkValue
        console.log("ink value: " + inkValue)
    }
    else {
        console.log("remove the cap or refill ink !")
        refillButton.style.borderColor = "Red"
        switchContainer.style.borderColor = "Red"
    }
})