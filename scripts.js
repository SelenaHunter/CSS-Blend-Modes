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
                let opacityWrapper = document.getElementById("opacity-wrapper");
                opacityWrapper.style.display = "block";
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
        return backgroundColor;
    } else {
        preview2.style.backgroundColor = color;
        return color;
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