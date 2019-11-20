let timer = document.querySelector("#counter");

// abstracted increase counter function
function increment() {
    let counter = parseInt(timer.innerText) + 1;
    timer.innerText = counter;
}
// abstracted decrease counter function
function decrement() {
    let counter = parseInt(timer.innerText) - 1;
    timer.innerText = counter;
}

// start counter
let interval = setInterval(increment, 1000);                   

// start counter on load
window.addEventListener("load", function(event) {
    interval;
})

// decrease counter on button click
let minusButton = document.getElementById("-")
minusButton.addEventListener("click", function(event) {
    decrement();
})

// increase counter on button click
let plusButton = document.getElementById("+")
plusButton.addEventListener("click", function(event) {
    increment();
})

// like a number and add a <li> to the <ul>
let heartButton = document.getElementById("<3")
heartButton.addEventListener("click", function(event) {
    let likes = document.querySelector(".likes");
    let num = parseInt(timer.innerText);
    let exist = document.getElementById(num);
    if (exist) {
        let counts = exist.querySelector("#counts");
        let newCount = parseInt(counts.innerText) + 1 + " times.";
        counts.innerHTML = `${newCount}`;
     } else {
        likes.innerHTML += `<li id="${num}">${num} has been liked <span id="counts">1 time.</span></li>`;
    }
})

// pause coutner on click of puase button, etc
let pause = document.querySelector("#pause")
pause.addEventListener("click", function(event) {
    let allButtons = document.querySelectorAll("button");
    if (pause.innerText === "pause") {
        clearInterval(interval);
        pause.innerText = "resume";
        allButtons.forEach(function(element) {
            if (element !== pause) {
                element.disabled = true;
            }  
        })
    } else {
        interval = setInterval(increment, 1000);                   
        pause.innerText = "pause";
        allButtons.forEach(function(element) {
                element.disabled = false;
        })
    }
})

// leave comments 
let fullForm = document.querySelector("#comment-form")
fullForm.addEventListener("submit", function(even){
    event.preventDefault(); 
    let commentText = document.querySelector("#comment-input").value;
    let commentList = document.querySelector("#list");
    commentList.innerHTML += `<p>${commentText}</p>`;
    fullForm.reset();
})
