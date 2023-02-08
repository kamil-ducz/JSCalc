function printSignToCalcHeader(sign) 
{
    console.log('Clicked button was' + Number(sign));
    var element = document.getElementById('result');
    element.value += sign;
}

function calculateResult()
{
    alert('Button will print calculation result in the calc header');
}

function cancelLastAction() 
{
    alert('Button will cancel last user operation');
}