console.log("I am linked");
const body = document.body;
const button = document.getElementById("toggle");

button.addEventListener("click", function(){
    if (body.getAttribute("class", "dark-mode")){
        body.removeAttribute("class", "dark-mode");
    }
    else {
        body.setAttribute("class", "dark-mode");
    }
})