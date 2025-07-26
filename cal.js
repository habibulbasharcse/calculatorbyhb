let expression = "";
const display = document.getElementById("display");


function appendToDisplay(value) {
    if(value !== "" && value !== "d") {
        expression += value;
    }else if(value === "d"){
        expression = expression.slice(0, -1);
    }

     if(value === "") {
        expression ="";
    }
    display.innerText=expression;
}


document.getElementById("one").addEventListener("click", () => appendToDisplay("1"));
document.getElementById("two").addEventListener("click", () => appendToDisplay("2"));
document.getElementById("three").addEventListener("click", () => appendToDisplay("3"));
document.getElementById("four").addEventListener("click", () => appendToDisplay("4"));
document.getElementById("five").addEventListener("click", () => appendToDisplay("5"));
document.getElementById("six").addEventListener("click", () => appendToDisplay("6"));
document.getElementById("seven").addEventListener("click", () => appendToDisplay("7"));
document.getElementById("eight").addEventListener("click", () => appendToDisplay("8"));
document.getElementById("nine").addEventListener("click", () => appendToDisplay("9"));
document.getElementById("zero").addEventListener("click", () => appendToDisplay("0"));
document.getElementById("dot").addEventListener("click", () => appendToDisplay("."));


document.getElementById("sum").addEventListener("click", () => appendToDisplay("+"));
document.getElementById("sub").addEventListener("click", () => appendToDisplay("-"));
document.getElementById("mul").addEventListener("click", () => appendToDisplay("*"));
document.getElementById("div").addEventListener("click", () => appendToDisplay("/"));

document.getElementById("clear").addEventListener("click",() => appendToDisplay(""));
document.getElementById("delete").addEventListener("click",() => appendToDisplay("d"));

document.getElementById("equal").addEventListener("click", () => {
    try {
        const result = eval(expression);
        display.innerText = result;
        expression = result.toString();
    } catch (e) {
        display.innerText = "Error";
        expression = "";
    }
});
