function init(){

    //variables
    var output = document.getElementsByClassName("output");
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
    var previousOperand = document.getElementsByClassName("previousoperand");
    var currentOperand = document.getElementsByClassName("currentoperand");

    //Events
    one.onclick = function(e){
        previousOperand.TextContent = previousOperand + "1";
    }
    two.onclick = function(e){
        previousOperand.TextContent = previousOperand + "2";
    }
    three.onclick = function(e){
        previousOperand.TextContent = previousOperand + "3";
    }
    four.onclick = function(e){
        previousOperand.TextContent = previousOperand + "4";
    }
    five.onclick = function(e){
        previousOperand.TextContent = previousOperand + "5";
    }
    six.onclick = function(e){
        previousOperand.TextContent = previousOperand + "6";
    }
    seven.onclick = function(e){
        previousOperand.TextContent = previousOperand + "7";
    }
    eight.onclick = function(e){
        previousOperand.TextContent = previousOperand + "8";
    }
    nine.onclick = function(e){
        previousOperand.TextContent = previousOperand + "9";
    }
    zero.onclick = function(e){
        previousOperand.TextContent = previousOperand + "0";
    }
}