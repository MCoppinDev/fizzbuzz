document.getElementById("fizzButton").addEventListener("click", function () {
  let num1 = document.getElementById("input1").value;
  let num2 = document.getElementById("input2").value;
  let limit = document.getElementById("limit").value;

  fizzBuzz(num1, num2,limit)

});

function fizzBuzz(num1, num2,limit) {

  let results = "";

  for (let i = 1; i <= limit; i++) {

    if (i % num1 == 0 && i % num2 == 0) {
      results += 'FizzBuzz,  ';
    }

    else if (i % num1 == 0) {
      results += 'Fizz,  ';
    }
      
    else if (i % num2 == 0) {
      results += 'Buzz,  ';
    }
      
    else results += i + ',  ';

  };

  document.get
  
  document.getElementById("results").innerHTML= `${results}`
};