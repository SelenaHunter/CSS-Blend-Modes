
let fileTag = document.getElementById("filetag");
let preview = document.getElementById("preview");
let colorPicker = document.getElementById("background-color-picker");
let bg = document.getElementById("background");
let backgroundColor = "#000000";
let buttons = document.getElementsByTagName("button");
let buttonsCount = buttons.length;

fileTag.addEventListener("change", function() {
    changeImage(this);
});

colorPicker.addEventListener("change", getUpdatedBackgroundColorValue, false);

function changeImage(input) {
    let fileReader;

    if (input.files && input.files[0]) {
    fileReader = new FileReader();

    fileReader.onload = function(e) {
        preview.style.backgroundImage = "url(" + e.target.result + ")";
    }

    fileReader.readAsDataURL(input.files[0]);
    }
}



// Color changing functions
function getUpdatedBackgroundColorValue (event) {
    backgroundColor = event.target.value;
    preview.style.backgroundColor = backgroundColor;
    return backgroundColor;
}

function changeCSS () {

    for (let i = 0; i <= buttonsCount; i += 1) {
        buttons[i].onclick = function(e) {
            if (this.id == "normal") {
                preview.style.backgroundBlendMode = "normal";
            } else if (this.id == "multiply") {
                preview.style.backgroundBlendMode = "multiply";
            } else if (this.id == "screen") {
                preview.style.backgroundBlendMode = "screen";
            } else if (this.id == "overlay") {
                preview.style.backgroundBlendMode = "overlay";
            } else if (this.id == "darken") {
                preview.style.backgroundBlendMode = "darken";
            } else if (this.id == "lighten") {
                preview.style.backgroundBlendMode = "lighten";
            } else if (this.id == "color-dodge") {
                preview.style.backgroundBlendMode = "color-dodge";
            } else if (this.id == "color-burn") {
                preview.style.backgroundBlendMode = "color-burn";
            } else if (this.id == "difference") {
                preview.style.backgroundBlendMode = "difference";
            } else if (this.id == "exclusion") {
                preview.style.backgroundBlendMode = "exclusion";
            } else if (this.id == "hue") {
                preview.style.backgroundBlendMode = "hue";
            } else if (this.id == "saturation") {
                preview.style.backgroundBlendMode = "saturation";
            } else if (this.id == "color") {
                preview.style.backgroundBlendMode = "color";
            } else if (this.id == "luminosity") {
                preview.style.backgroundBlendMode = "luminosity";
            }
        }
    }
}