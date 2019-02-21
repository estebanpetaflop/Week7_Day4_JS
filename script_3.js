console.log("Yo Keops, cb d'étages à ta pyramide?")
let floor = prompt( "Yo Keops, cb d'étages à ta pyramide?")
console.log(pyramide(floor))


function pyramide(floor) {
  if (floor>25) {
    return "C'est troooop maiiiitre, 25 maximum SVP ! Recharge donc la page"
  }
  else {
    pyramide = ""
    for (let number = 1; number <= floor; number++) {
      pyramide += " ".repeat(floor-number)+"#".repeat(number)+"\n" }
    }
    return pyramide
  }
