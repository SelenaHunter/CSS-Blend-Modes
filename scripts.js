
document.addEventListener("change", function(event) {
    if (event.target.classList.contains('filetag')) {
        changeImage(this.activeElement);
    } else if (event.target.classList.contains('color-picker')) {
        getUpdatedBackgroundColorValue(this.activeElement);
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
                let opacityWrapper = document.getElementById("opacity-wrapper");
                opacityWrapper.style.display = "block";
            }
        }
        fileReader.readAsDataURL(input.files[0]);   
    }
}

function getUpdatedBackgroundColorValue(input) {
    let backgroundColor = input.value;
    if (input.id == "background-color-picker1") {
        preview.style.backgroundColor = backgroundColor;
        return backgroundColor;
    } else {
        preview2.style.backgroundColor = backgroundColor;
        return backgroundColor;
    }
}

function changeCSSBlendMode () {
    let preview = document.getElementById("preview");
    let preview2 = document.getElementById("preview2");
    if (event.srcElement.className == "button1") {
        preview.style.backgroundBlendMode = event.srcElement.id;
    } else {
        preview2.style.backgroundBlendMode = event.srcElement.id;
    } 
}

let rangeSlider = document.getElementById("opacity");
let output = document.getElementById("opacity-amount");
output.innerHTML = rangeSlider.value;

rangeSlider.oninput = function() {
  output.innerHTML = this.value;
  preview.style.opacity = this.value + "%";
}

let rangeSlider2 = document.getElementById("opacity2");
let output2 = document.getElementById("opacity-amount2");
output2.innerHTML = rangeSlider2.value;

rangeSlider2.oninput = function() {
  output2.innerHTML = this.value;
  preview2.style.opacity = this.value + "%";
}