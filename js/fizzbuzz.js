document.getElementById("fizzButton").addEventListener("click", function () {
  let num1 = document.getElementById("input1").value;
  let num2 = document.getElementById("input2").value;

  fizzBuzz(num1, num2)

});

function fizzBuzz(num1, num2) {

  let results = "";

  for (let i = 1; i <= 100; i++) {

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
  
  document.getElementById("results").innerHTML= `${results}`
};