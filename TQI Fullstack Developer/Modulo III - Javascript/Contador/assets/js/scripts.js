var addButton = document.getElementsByName("adicionar")[0];
var subtractButton = document.getElementsByName("subtrair")[0];

var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

addButton.addEventListener("click", increment, false);
subtractButton.addEventListener("click", decrement, false);

function increment()
{
    currentNumber++;
    numberLimiter();
    updateWrapper();
}

function decrement()
{
    currentNumber--;
    numberLimiter();
    updateWrapper();
}

function updateWrapper()
{
    currentNumberWrapper.innerHTML = currentNumber;
}

function numberLimiter ()
{
    var min = -10;
    var max = 10;

    if(currentNumber <= min)
    {
        currentNumber = min;
        subtractButton.disabled = true;
        subtractButton.style.setProperty("color","black");
        subtractButton.style.setProperty("border-color","black");
        subtractButton.style.setProperty("background-color","grey");
    }
    else
    {
        subtractButton.disabled = false;
        subtractButton.style.setProperty("color","lightcoral");
        subtractButton.style.setProperty("border-color","lightcoral");
        subtractButton.style.setProperty("background-color","rgb(241, 214, 214)");
    }

    if(currentNumber >= max)
    {
        currentNumber = max;
        addButton.disabled = true;
        addButton.style.setProperty("color","black");
        addButton.style.setProperty("border-color","black");
        addButton.style.setProperty("background-color","grey");
    }
    else
    {
        addButton.disabled = false;
        addButton.style.setProperty("color","lightcoral");
        addButton.style.setProperty("border-color","lightcoral");
        addButton.style.setProperty("background-color","rgb(241, 214, 214)");
    }

    if(currentNumber < 0)
    {
        currentNumberWrapper.style.setProperty("color", "red");
    }
    else if(currentNumber > 0)
    {
        currentNumberWrapper.style.setProperty("color", "green");
    }
    else
    {
        currentNumberWrapper.style.setProperty("color", "black");
    }
}