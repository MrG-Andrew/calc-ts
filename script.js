"use strict";
let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let mainString = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
    button.addEventListener("click", (e) => {
        const target = e.target;
        if (target && typeof target.innerHTML === "string") {
            console.log("in main if");
            console.log(target.innerHTML);
            if (target.innerHTML === "=") {
                console.log("if");
                mainString = eval(mainString);
                input.value = mainString;
            }
            else if (target.innerHTML === "AC") {
                console.log("ac");
                mainString = "";
                input.value = mainString;
            }
            else if (target.innerHTML === "DEL") {
                console.log("del");
                mainString = mainString.substring(0, mainString.length - 1);
            }
            else {
                console.log("in else");
                mainString += target.innerHTML;
                input.value = mainString;
            }
        }
    });
});
