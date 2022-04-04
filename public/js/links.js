// Function to display message
// Prompt user to login or sign up to browse the website

let navArr = document.querySelectorAll(".links");
let postArr = document.querySelectorAll(".custom-post");
let cusMain = document.querySelector(".custom-main");
let hEl = document.querySelector("#msg").innerHTML;
let dispEl = document.querySelector("#dispMsg");
let hComp = Handlebars.compile(hEl);

function displayMsg() {
    console.log("in function");
    console.log(hEl);
    let message = hComp();
    console.log(message);
    dispEl.innerHTML = message;
}

navArr.forEach((nLink) => nLink.addEventListener('click', displayMsg));
postArr.forEach((pLink) => pLink.addEventListener('click', displayMsg));