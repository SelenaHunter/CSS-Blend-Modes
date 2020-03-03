// Add and use all event listeners for the page
document.addEventListener("change", function(event) {
    if (event.target.classList.contains('filetag')) {
        changeImage(this.activeElement);
    } else if (event.target.classList.contains('color-picker')) {
        getBackgroundColorValue(this.activeElement);
    } else if (event.target.classList.contains('opacity-control')) {
        changeOpacity(this.activeElement);
    }
}, false);

function changeImage(input) {
    let fileReader;
    if (input.files && input.files[0]) {
        fileReader = new FileReader();
        fileReader.onload = function(e) {
            if (input.id == "filetag1") {
                preview.style.backgroundImage = "url(" + e.target.result + ")";
            } else {
                preview2.style.backgroundImage = "url(" + e.target.result + ")";
            }
        }
        fileReader.readAsDataURL(input.files[0]);   
    }
}

function changeOpacity(input) {
    if (input.id == 'opacity') {
        let output = document.getElementById("opacity-amount");
        output.innerHTML = input.value;
        preview.style.opacity = input.value + "%";   
    } else {
        let output = document.getElementById("opacity-amount2");
        output.innerHTML = input.value;
        preview2.style.opacity = input.value + "%";   
        
    }
}

function getBackgroundColorValue(input) {
    let color = input.value;
    if (input.id == "background-color-picker1") {
        preview.style.backgroundColor = color;
    } else {
        preview2.style.backgroundColor = color;
    }
}

function changeCSSBlendMode() {
    if (event.srcElement.className == "button1") {
        preview.style.backgroundBlendMode = event.srcElement.id;
    } else {
        preview2.style.backgroundBlendMode = event.srcElement.id;
    } 
}

function changeClip() {
    if (event.srcElement.className == "clip-button") {
        if (event.srcElement.id == "full") {
            preview.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
        } else if (event.srcElement.id == "half") {
            preview.style.clipPath = "polygon(0 0, 50% 0, 50% 100%, 0% 100%)";
        } else {
            preview.style.clipPath = "polygon(0 0, 0% 100%, 100% 0)";
        }
    } else {
        if (event.srcElement.id == "full2") {
            preview2.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
        } else if (event.srcElement.id == "half2") {
            preview2.style.clipPath = "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)";
        } else {
            preview2.style.clipPath = "polygon(100% 0, 0% 100%, 100% 100%)";
        }
    } 
}

// Add (and remember) the selected button for each category of buttons
let clipButtons = document.querySelectorAll(".clip-button");
let prevClipButton = clipButtons[0];
[].forEach.call(clipButtons, function(clipButton) {
    clipButton.addEventListener("click", function() {
        prevClipButton.classList.remove("active");
        clipButton.classList.add("active");
        prevClipButton = clipButton; // remember previously active button
    });
});

let clipButtons2 = document.querySelectorAll(".clip-button2");
let prevClipButton2 = clipButtons2[0];
[].forEach.call(clipButtons2, function(clipButton2) {
    clipButton2.addEventListener("click", function() {
        prevClipButton2.classList.remove("active");
        clipButton2.classList.add("active");
        prevClipButton2 = clipButton2;
    });
});

let buttons = document.querySelectorAll(".button1");
let prevButton = buttons[0];
[].forEach.call(buttons, function(button) {
    button.addEventListener("click", function() {
        prevButton.classList.remove("active");
        button.classList.add("active");
        prevButton = button;
    });
});

let buttons2 = document.querySelectorAll(".button2");
let prevButton2 = buttons2[0];
[].forEach.call(buttons2, function(button2) {
    button2.addEventListener("click", function() {
        prevButton2.classList.remove("active");
        button2.classList.add("active");
        prevButton2 = button2;
    });
});