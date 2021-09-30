var inpuBtn = document.querySelector("#inputBtn")
var input = document.querySelectorAll(".input")
var outputBox = document.querySelector("#outputBox")

inpuBtn.addEventListener("click", clickHandler)

/* const inputA = Number(input[0].value);

const inputB = Number(input[1].value); */

function clickHandler()
{
    var inputA = Number(input[0].value);

    var inputB = Number(input[1].value);
    console.log (inputA)
    
finalResult(inputA,inputB)

}

function finalResult (inputOne, inputTwo)
{
    if(inputOne <0 || inputTwo<0){
        outputBox.innerText = `Please put valid numbers.` 
    }
   else{
    var a = inputOne * inputTwo;
  
const result = ( 0.5 * a);
const resultFinal = result.toFixed(2)

outputBox.innerText = `The Area of triangle is ${resultFinal}.`
   }
}