import plus from "./logic/a";
import minus from "./logic/b";

const plusDiv = document.createElement('div');
plusDiv.innerHTML += plus(2, 2)


const minusDiv = document.createElement('div');
minusDiv.innerHTML += minus(2, 2)

document.body.appendChild(plusDiv);
document.body.appendChild(minusDiv);