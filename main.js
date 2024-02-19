const resultElement = document.getElementById('result');
const btnPlus = document.getElementById('button-plus');
const btnMinus = document.getElementById('button-minus');
const resultBtn = document.getElementById('calculate')
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
let action = '+';

btnPlus.onclick = function() {
  action = '+'
}

btnMinus.onclick = function() {
  action = '-'
}



resultBtn.onclick = function(){
  if (action == '+'){
    const sum = Number(input1.value) + Number(input2.value);
    resultElement.textContent = sum;
  } else {
    const sum = Number(input1.value) - Number(input2.value);
    resultElement.textContent = sum;
  }
}