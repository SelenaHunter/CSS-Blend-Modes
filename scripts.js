
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