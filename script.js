function playDelSound() 
{
    var audio = new Audio('sound/del.mp3');
    audio.play();
}

function playEqualsSound() 
{
    var audio = new Audio('sound/equals.mp3');
    audio.play();
}

function playKeystroke() 
{
    var audio = new Audio('sound/keystroke.mp3');
    audio.play();
}

var leftElement = 0;
var rightElement = 0;
var calculationResult = 0;

var buffer = null;
var currentSign = null;
var calcState = null;

function printSignToCalcHeader(sign) 
{
    playKeystroke() 
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
        this.calculationResult = performMathOperation(this.currentSign);
        console.log('this.calculationResult=' + this.calculationResult);
    }
    var element = document.getElementById('result');
    console.log('element='+element);
    element.value = this.calculationResult;
    this.bufferElement = document.getElementById('buffer');
    if (this.currentSign != 'sqrt')
    {
        this.bufferElement.value += this.rightElement;
        return;
    }
    return;
}

function handleLeftSideOfOperation(sign)
{
    console.log('Clicked button was ' + sign);
    var element = document.getElementById('result');
    console.log('element='+typeof(element));
    this.leftElement = element.value;
    console.log('this.leftElement='+this.leftElement);
    this.currentSign = sign;
    console.log('this.currentSign='+this.currentSign+'typeof(this.currentSign)='+typeof(this.currentSign));
    this.bufferElement = document.getElementById('buffer');
    this.buffer = this.leftElement + sign;  
    if (this.currentSign != "sqrt")
    {        
        this.bufferElement.value = buffer;
        console.log('this.buffer='+this.buffer+' buffer type='+typeof(this.buffer));
        element.value = null;
        calcState = 'left-ready';
        console.log('calcState='+calcState);
        return;
    }
    this.bufferElement.value += 'sqrt('+this.leftElement+')';  
    return;
}

function cleanCalcHeaderAndBuffer()
{
    playDelSound();
    var resultInput = document.getElementById('result');
    var bufferInput = document.getElementById('buffer');
    resultInput.value = null;
    bufferInput.value = null;    
}

function performMathOperation(sign)
{
    console.log('entered performMathOperation function!');
    console.log('this.leftElement='+this.leftElement+' this.rightElement='+this.rightElement+' this.sign='+this.currentSign+' typeof(sign)='+typeof(currentSign));
    playEqualsSound();
    switch(sign) 
    {
        case '+': 
        {
            return Number(this.leftElement) + Number(this.rightElement);
        }
        case '-': 
        {
            return this.leftElement - this.rightElement;
        }
        case '*': 
        {
            return this.leftElement * this.rightElement;
        }
        case '/': 
        {
            return this.leftElement / this.rightElement;
        }
        case '%':
        {
            return this.leftElement / 100 * this.rightElement;        
        }
        case 'sqrt':
        {
            return Math.sqrt(this.leftElement); 
        }
    }
}

function addDecimalDot()
{
    var resultInput = document.getElementById('result');
    var resultInputValue = String(resultInput.value);
    if (resultInputValue.charAt(resultInputValue.length - 1) == '.')
    {
        return;
    }
    resultInput.value += '.';
}