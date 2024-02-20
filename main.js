const resultElement = document.getElementById('result');
const btnPlus = document.getElementById('button-plus');
const btnMinus = document.getElementById('button-minus');
const resultBtn = document.getElementById('calculate');
const multiplicationBtn = document.getElementById('button-multiplication');
const divisionBtn = document.getElementById('button-division');

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
let action = '+';

btnPlus.onclick = function() {
  action = '+'
}

btnMinus.onclick = function() {
  action = '-'
}
multiplicationBtn.onclick = function(){
  action = '*'
}
divisionBtn.onclick = function(){
  action = '/'
}

function printResult(result){
  if (result < 0){
    resultElement.style.color = 'red';
  } else {
    resultElement.style.color = 'green';
  }
  resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol){
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
  if (actionSymbol == '+'){
    return(num1 + num2);
  }
  if (actionSymbol == '-'){
    return(num1 - num2);
  }
  if (actionSymbol == '*'){
    return(num1 * num2)
  }
  if (actionSymbol == '/'){
    return(num1 / num2)
  }
}

resultBtn.onclick = function(){
  const result = computeNumbersWithAction(input1, input2, action);
  printResult(result);
}