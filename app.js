var input = document.querySelectorAll(".input");
var inputBtn = document.querySelector("#inputBtn");
var clearBtn = document.querySelector("#clearBtn");
var errorBox = document.querySelector("#errorBox");
var outputBox = document.querySelector("#outputBox");

inputBtn.addEventListener("click", inputClick)
/* clearBtn.addEventListener("click", clear) */



function inputClick() {
    var angleOne = Number(input[0].value);
    var angleTwo = Number(input[1].value);
    var angleThree = Number(input[2].value);

    calculate(angleOne, angleTwo, angleThree)

}

function calculate(anOne, anTwo, anThree) {

    if (anOne > 0 && anTwo > 0 && anThree > 0) {
        var result = anThree + anTwo + anOne;
        if (result === 180) {
            outputBox.innerText = "Hurrah! Entered Angles make Triangle"
        } else {
            outputBox.innerText = "Sadly ! Entered Angles doesn't make any Triangle."
        }
    } else errorBox.innerText = "All input angles should be greater than zero"
}