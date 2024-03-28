console.log("I am linked");
const body = document.body;
const button = document.getElementById("toggle");

let state = localStorage.getItem("class");

if (state === "dark-mode"){
    body.setAttribute("class", "dark-mode");
}

button.addEventListener("click", function(){
    if (body.getAttribute("class", "dark-mode")){
        body.removeAttribute("class", "dark-mode");
        localStorage.removeItem("class")
    }
    else {
        body.setAttribute("class", "dark-mode");
        localStorage.setItem("class", "dark-mode");
        console.log("dark mode toggled")
    }
})