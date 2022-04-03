
let navArr = document.querySelectorAll(".links");
let postArr = document.querySelectorAll(".custom-post");
let cusMain = document.querySelector(".custom-main");
let hEl = document.querySelector("#msg").innerHTML;
let dispEl = document.querySelector("#dispMsg");
let hComp = Handlebars.compile(hEl);
let msgStr = "Please sign up or sign in to access all the content on Tech Blog!";
// $('#buttonId').click(function(){
//   myName = $('#nameId').val();
//   $('#containerId').html(hComp());
// });

// home.addEventListener('click', displayMsg);


function displayMsg() {
    console.log("in function");
    let message = hComp(msgStr);
    console.log(message);
    dispEl.innerHTML = message;
    // hEl.innerHTML = "Please sign up or sign in to access all the content on Tech Blog!";
    // // console.log(logged_in);
    // // if(!logged_in) {
    // //     alert("Please sign up or sign in to access all the content on Tech Blog!");
    // // }
}

navArr.forEach((nLink) => nLink.addEventListener('click', displayMsg));
postArr.forEach((pLink) => pLink.addEventListener('click', displayMsg));