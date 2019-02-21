number = prompt("De quel nombre veut tu calculer la factorielle ?")
console.log(factorial(number))

function factorial(inputNumber){

  if (inputNumber == 0) {
    outputNumber = 1
  }
  else {
    outputNumber = inputNumber
    for (let number = 1; number <inputNumber; number++) {
      outputNumber *= number
    }
  }
  return outputNumber
}
