const view = document.getElementById("view");
const del = document.getElementById("delete");
const result = document.getElementById("result");
const mul = document.getElementById("mul");
const rest = document.getElementById("rest");
const div = document.getElementById("div");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("five");
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

viewRes(one);
viewRes(two);
