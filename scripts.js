
let fileTag1 = document.getElementById("filetag1");
let fileTag2 = document.getElementById("filetag2");
let preview = document.getElementById("preview");
let preview2 = document.getElementById("preview2");
let colorPicker1 = document.getElementById("background-color-picker1");
let colorPicker2 = document.getElementById("background-color-picker2");
let bg = document.getElementById("background");
let backgroundColor = "#000000";
let backgroundColor2 = "#000000";

fileTag1.addEventListener("change", function() {
    changeImage1(this);
});

fileTag2.addEventListener("change", function() {
    changeImage2(this);
});

colorPicker1.addEventListener("change", getUpdatedBackgroundColorValue, false);
colorPicker2.addEventListener("change", getUpdatedBackgroundColorValue2, false);

function changeImage1(input) {
    let fileReader;
    if (input.files && input.files[0]) {
        fileReader = new FileReader();
    fileReader.onload = function(e) {
        preview.style.backgroundImage = "url(" + e.target.result + ")";
    }
    fileReader.readAsDataURL(input.files[0]);
    }
}

function changeImage2(input) {
    let fileReader;
    if (input.files && input.files[0]) {
    fileReader = new FileReader();
    fileReader.onload = function(e) {
        preview2.style.backgroundImage = "url(" + e.target.result + ")";
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
function getUpdatedBackgroundColorValue2 (event) {
    backgroundColor2 = event.target.value;
    preview2.style.backgroundColor = backgroundColor2;
    return backgroundColor;
}

function changeCSS () {
    if (event.srcElement.className == "button1") {
        preview.style.backgroundBlendMode = event.srcElement.id;
    } else {
        preview2.style.backgroundBlendMode = event.srcElement.id;
    } 
}