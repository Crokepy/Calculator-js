const view = document.getElementById("view");
const del = document.getElementById("delete");
const sum = document.getElementById("sum");
const result = document.getElementById("result");
const mult = document.getElementById("mult");
const rest = document.getElementById("res");
const div = document.getElementById("div");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const cero = document.getElementById("cero");

function viewRes(numVar) {
  numVar.addEventListener("click", () => {
    var val = view.value;
    var valueVar = numVar.innerHTML;
    console.log(valueVar);
    Reflect.set(view, "value", `${val}${valueVar}`);
  });
}

function valorLog(op) {
  op.addEventListener("click", () => {
    var value1 = view.value;
    console.log(value1);
    Reflect.set(view, "value", "");
    result.addEventListener("click", () => {
      var value2 = view.value;
      if (op === sum) {
        let numInt1 = parseInt(value1);
        let numInt2 = parseInt(value2);
        let resultado = numInt1 + numInt2;
        Reflect.set(view, "value", resultado);
        console.log(resultado);
      } else if (op === rest) {
        let numInt1 = parseInt(value1);
        let numInt2 = parseInt(value2);
        let resultado = numInt1 - numInt2;
        Reflect.set(view, "value", resultado);
        console.log(resultado);
      } else if (op === div) {
        let numInt1 = parseInt(value1);
        let numInt2 = parseInt(value2);
        let resultado = numInt1 / numInt2;
        Reflect.set(view, "value", resultado);
        console.log(resultado);
      } else if (op === mult) {
        let numInt1 = parseInt(value1);
        let numInt2 = parseInt(value2);
        let resultado = numInt1 * numInt2;
        Reflect.set(view, "value", resultado);
        console.log(resultado);
      }
    });
  });
}

del.addEventListener("click", () => {
  Reflect.set(view, "value", "");
});

result.addEventListener("click", () => {
  let egg = view.value;
  if (egg === "Croque") {
    Reflect.set(view, "value", "!Hey¡, no deberias ver esto");
  }
});

// Boton view user

viewRes(one);
viewRes(two);
viewRes(three);
viewRes(four);
viewRes(five);
viewRes(six);
viewRes(seven);
viewRes(eight);
viewRes(nine);
viewRes(cero);

// function value

valorLog(sum);
valorLog(rest);
valorLog(mult);
valorLog(div);
