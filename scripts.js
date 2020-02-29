
let fileTag = document.getElementById("filetag");
let preview = document.getElementById("preview");
let colorPicker = document.getElementById("background-color-picker");
let bg = document.getElementById("background");
let backgroundColor = "#000000";
let button = document.getElementsByTagName("button");

fileTag.addEventListener("change", function() {
    changeImage(this);
});

colorPicker.addEventListener("change", getUpdatedBackgroundColorValue, false);

function changeImage(input) {
    let fileReader;

    if (input.files && input.files[0]) {
    fileReader = new FileReader();

    fileReader.onload = function(e) {
        preview.setAttribute('src', e.target.result);
    }

    fileReader.readAsDataURL(input.files[0]);
    }
}



// Color changing functions
function getUpdatedBackgroundColorValue (event) {
    backgroundColor = event.target.value;
    bg.style.backgroundColor = backgroundColor;
    return backgroundColor;
}

function changeCSS () {
    if (button.id == "normal") {
        preview.style.mixBlendMode = "normal";
    } else if (button.id == "multiply") {
        preview.style.mixBlendMode = "multiply";
    } else if (button.id == "screen") {
        preview.style.mixBlendMode = "screen";
    }
}