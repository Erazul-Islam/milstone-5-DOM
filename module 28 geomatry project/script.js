function calculateArea(){
    const baseField = document.getElementById('triangle-b');
    const baseValue = parseFloat(baseField.value);
    
    const heightField = document.getElementById('triangle-h');
    const heightValue = parseFloat(heightField.value);
    

    const area = .5 * baseValue * heightValue;
    
    // show triangle area

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

function rectengleArea (){
    const witdthField = document.getElementById('rectangle-w');
    const widthValue = parseFloat(witdthField.value);
    
    const lengthField = document.getElementById('rectangle-l');
    const lengthValue = parseFloat(lengthField.value);
    
    const result = widthValue * lengthValue;
    
    const resultSpan = document.getElementById('rectangle-area');
    resultSpan.innerText = result;
}

function calculatePara(){
    const base = getInputValue('Parallelogram-b')
    const height = getInputValue('Parallelogram-h')

    const area = base * height;
    setElement('Parallelogram-area',area)

    // add to calculation entry

    addtoCalculator('')
}

function ellipseArea (){
    const major = getInputValue('Ellipse-a');
    const minor = getInputValue('Ellipse-b');

    const area = Math.PI * major * minor
    setElement('Ellipse-area', area)
}

// add to calculation entry 

function addtoCalculator(areaType, shape){

}

function getInputValue (field){
    const inputField = document.getElementById(field);
    const inputValue = inputField.value;
    const value = parseFloat(inputValue);
    return value;
}

function setElement (elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}