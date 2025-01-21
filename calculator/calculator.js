function add() {
  const a = parseFloat(calcForm.a.value) || 0;
  const b = parseFloat(calcForm.b.value) || 0;
  calcForm.result.value = a + b;
}

function subtract() {
  const a = parseFloat(calcForm.a.value) || 0;
  const b = parseFloat(calcForm.b.value) || 0;
  calcForm.result.value = a - b;
}

function multiply() {
  const a = parseFloat(calcForm.a.value) || 0;
  const b = parseFloat(calcForm.b.value) || 0;
  calcForm.result.value = a * b;
}

function divide() {
  const a = parseFloat(calcForm.a.value) || 0;
  const b = parseFloat(calcForm.b.value) || 0;
  calcForm.result.value = b !== 0 ? a / b : "Error";
}

function factorial() {
  let a = parseInt(calcForm.a.value) || 0;
  let result = 1;
  for (let i = 2; i <= a; i++) {
    result = result * i;
  }
  calcForm.result.value = result;
}

function power() {
  const a = parseFloat(calcForm.a.value) || 0;
  const b = parseFloat(calcForm.b.value) || 0;

  let result = 1;
  for (let i = 0; i < b; i++) {
    result = result * a;
  }
  calcForm.result.value = result;
}

function powerOf2() {
  const a = parseFloat(calcForm.a.value) || 0;

  let result = 1;
  for (let i = 0; i < a; i++) {
    result = result * 2;
  }
  calcForm.result.value = result;
}

function sqrt() {
  const a = parseFloat(calcForm.a.value) || 0;
  calcForm.result.value = a ** (1 / 2);
}

function sinus() {
  const a = parseFloat(calcForm.a.value) || 0;
  calcForm.result.value = Math.sin(a);
}

function cosinus() {
  const a = parseFloat(calcForm.a.value) || 0;
  calcForm.result.value = Math.cos(a);
}

function logarithm() {
  const a = parseFloat(calcForm.a.value) || 0;
  const b = parseFloat(calcForm.b.value) || 0;

  calcForm.result.value = Math.log(a) / Math.log(b);
}
