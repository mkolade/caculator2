let value1 = 0;
let value2 = 0;
let operation = "";
let total = 0;

function showNumber(number)
{

    document.getElementById('sol').value = document.getElementById('sol').value + number
}


function parseValue(operationselected)
{
    value1 = parseInt(document.getElementById('sol').value);

    document.getElementById('sol').value = "";

    operation = operationselected

}


function reset(){
    value1 = 0;

    value2 = 0;

    document.getElementById('sol').value = "";
}

function calculate(){

    value2 = parseInt(document.getElementById('sol').value);

    if(operation == "+")
    {
        total = value1 + value2;
    }

    else if(operation == "-")
    {
        total = value1 - value2;
    }

    else if(operation == "x")
    {
        total = value1 * value2
    }

    else if(operation == "/")
    {
        total = value1 / value2
    }

    document.getElementById('sol').value = total

}