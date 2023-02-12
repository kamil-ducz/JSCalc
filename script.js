var leftElement = 0;
var rightElement = 0;
var calculationResult = 0;
var sign = null;
var buffer = null;
var currentSign = null;
var calcState = null;

function printSignToCalcHeader(sign) 
{
    console.log('Clicked button was' + Number(sign));
    var element = document.getElementById('result');
    element.value += sign;
}

function calculateResult()
{
    var element = document.getElementById('result');
    this.rightElement = element.value;
    console.log('entered calculate function, rightElement='+rightElement);
    console.log('left-ready='+this.calcState+' this.buffer='+this.buffer+' this.currentSign='+this.currentSign)
    if (calcState = 'left-ready' && this.buffer != null & this.currentSign != null)
    {
        this.calculationResult = Number(leftElement) +this.sign+ Number(rightElement);
        console.log('this.calculationResult='+this.calculationResult);
    }
    var element = document.getElementById('result');
    console.log('element='+element);
    element.value = this.calculationResult;
    this.bufferElement = document.getElementById('buffer');
    this.bufferElement.value += this.rightElement;
}

function cancelLastAction() 
{
    alert('Button will cancel last user operation');
}

function handleLeftSideOfOperation(sign)
{
    console.log('Clicked button was ' + sign);
    var element = document.getElementById('result');
    console.log('element='+typeof(element));
    this.leftElement = element.value;
    console.log('this.leftElement='+this.leftElement);
    this.currentSign = sign;
    console.log('this.currentSign='+this.currentSign);
    this.bufferElement = document.getElementById('buffer');
    this.buffer = this.leftElement + sign;    
    this.bufferElement.value = buffer;
    console.log('this.buffer='+this.buffer+' buffer type='+typeof(this.buffer));
    element.value = null;
    calcState = 'left-ready';
    console.log('calcState='+calcState);
}