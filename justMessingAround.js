function button(element) {
    console.log("Button clicked...", element)
}

function toggleFlashlight(element) {
    if (element.innerText === "Flashlight: On") {
        element.innerText = "Flashlight: Off"
    } else {
        element.innerText = "Flashlight: On"
}
}

function hide(element) {
    element.remove()
}


function litFlashlight(element) {
    
}