let grocery1;
let grocery2;
let grocery3;

function calculateTotalAmount() {

  if (isNaN((grocery1 = parseFloat(document.getElementById('grocery1').value)))){grocery1 = 0;}
  if (isNaN((grocery2 = parseFloat(document.getElementById('grocery2').value)))){grocery2 = 0;}
  if (isNaN((grocery3 = parseFloat(document.getElementById('grocery3').value)))){grocery3 = 0}

let total = grocery1 + grocery2 + grocery3;
console.log(grocery1);
document.getElementById('result').innerText = `The total amount is: $ ${total}`;

}