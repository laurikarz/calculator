var firstNum;
var secondNum;
var operation;

function init(){

    //variables
    var result = document.getElementById("result");
    var reset = document.getElementById("reset");
    var sum = document.getElementById("sum");
    var resta = document.getElementById("resta");
    var multiplication = document.getElementById("multiplication");
    var division = document.getElementById("division");
    var equal = document.getElementById("equal");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    var zero = document.getElementById("zero");
    var comma = document.getElementById("comma");

    //Events - Numbers
    one.onclick = function(e){
        if (checkLimit(result.textContent))
            result.textContent = result.textContent + "1";
    }
    two.onclick = function(e){
        if (checkLimit(result.textContent))
            result.textContent = result.textContent + "2";
    }
    three.onclick = function(e){
        if (checkLimit(result.textContent))
            result.textContent = result.textContent + "3";
    }
    four.onclick = function(e){
        if (checkLimit(result.textContent))
            result.textContent = result.textContent + "4";
    }
    five.onclick = function(e){
        if (checkLimit(result.textContent))
            result.textContent = result.textContent + "5";
    }
    six.onclick = function(e){
        if (checkLimit(result.textContent))
            result.textContent = result.textContent + "6";
    }
    seven.onclick = function(e){
        if (checkLimit(result.textContent))
            result.textContent = result.textContent + "7";
    }
    eight.onclick = function(e){
        if (checkLimit(result.textContent))
            result.textContent = result.textContent + "8";
    }
    nine.onclick = function(e){
        if (checkLimit(result.textContent))
            result.textContent = result.textContent + "9";
    }
    zero.onclick = function(e){
        if (checkLimit(result.textContent))    
            result.textContent = result.textContent + "0";
    }

    //Events - Operations
    reset.onclick = function(e){
        resetFunct();
    }
    sum.onclick = function(e){
        firstNum = result.textContent;
        operation = '+';
        clean();
    }
    resta.onclick = function(e){
        firstNum = result.textContent;
        operation = '-';
        clean();
    }
    multiplication.onclick = function(e){
        firstNum = result.textContent;
        operation = '*';
        clean();
    }
    division.onclick = function(e){
        firstNum = result.textContent;
        operation = '/';
        clean();
    }
    equal.onclick = function(e){
        secondNum = result.textContent;
        solution();
    }
    comma.onclick = function(e){
        if(checkLimit(result.textContent))
            if(result.textContent !== "") 
                (result.textContent = result.textContent + ".");
            else
                (result.textContent = "0" + ".");
    }
}

function checkLimit(number){
    var limit = 10;
    if (number.length < limit)
        return true;
    return false;
}

function resetFunct(){
    result.textContent = "";
    firstNum = 0;
    secondNum = 0;
    operation= "";
}

function clean(){
    result.textContent = "";
}

function solution(){
    var total = 0;
    switch (operation) {
        case "+":
            total = parseFloat(firstNum) + parseFloat(secondNum);
            break;
        case "-":
            total = parseFloat(firstNum) - parseFloat(secondNum);
            break; 
        case "*":
            total = parseFloat(firstNum) * parseFloat(secondNum);
            break; 
        case "/":
            total = parseFloat(firstNum) / parseFloat(secondNum);
            break;
    }
    resetFunct();
    
    (checkLimit(total)) ? result.textContent = total : result.textContent = Math.round(total*100)/100;
}