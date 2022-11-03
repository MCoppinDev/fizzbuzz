var fizzBuzzResults = document.getElementById("fizzBuzzResults");
var resultDOM = document.getElementById("resultCard");
var resultMessage = document.getElementById("resultMessage");
var hideButton = document.getElementById("hideButton");

function fizzBuzz(num1, num2,limit) {

  let results = [];

  for (let i = 1; i <= limit; i++) {

    if (i % num1 == 0 && i % num2 == 0) {
      results.push(' ✨FizzBuzz⚡ ');
    }

    else if (i % num1 == 0) {
      results.push(' Fizz!✨ ');
    }
      
    else if (i % num2 == 0) {
      results.push(' Buzz!⚡ ');
    }
      
    else results.push(` ${i} `);
  };

  return results;
};


document.getElementById("fizzButton").addEventListener("click", function () {
  let num1 = document.getElementById("input1").value;
  let num2 = document.getElementById("input2").value;
  let limit = document.getElementById("limit").value;
  resultDOM.style.visibility = "visible"

  
  resultMessage.innerHTML = fizzBuzz(num1, num2, limit);

});