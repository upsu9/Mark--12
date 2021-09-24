var inputBtn = document.querySelector("#inputBtn")
var form = document.querySelector(".form")
var outputBox = document.querySelector(".outputBox")

inputBtn.addEventListener("click", clickHandler)


const rightAnswer = ["90", "45", "180"]

function clickHandler() {

    let score = 0;
    let i = 0;
    const results = new FormData(form);
    for (var value of results.values()) {
        if (value === rightAnswer[i]){
            score = score + 1;
    }
    i = i + 1
}
console.log(score)
outputBox.innerText = `Your score is ${score}.`
}

/* function compare (){
    if(rightAnswer[])
} */