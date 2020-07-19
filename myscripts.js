function backSpace() {
    box = document.getElementById('input');
    number = box.value;
    var len = number.length - 1;
    var newNumber = number.substring(0, len);
    box.value = newNumber;
}

function cler() {
    document.getElementById('input').value = '';
    document.getElementById('answers').value = '';
    document.getElementById('helper').value = '';
}

function isInputNumber(evt) {
    var ch = String.fromCharCode(evt.which);
    if (!(/[0-9]/.test(ch))) {
        evt.preventDefault();
    }
}

function calc(type) {
    // get the value of the input when the button is clicked
    const value = document.getElementById('input').value;
    // declare the result
    let result = 0;
    helper = "";
    switch (type) {
        case 'sin':
            result = Math.sin(value);
            helper = "Sin " + value + " =";
            break;
        case 'cos':
            result = Math.cos(value);
            helper = "Cos " + value + " =";
            break;
        case 'tan':
            result = Math.tan(value);
            helper = "Tan " + value + " =";
            break;
        case 'sin-':
            result = Math.asin(value);
            helper = "Sin  " + value + " =";
            break;
        case 'cos-':
            result = Math.acos(value);
            helper = "Cos " + value + " =";
            break;
        case 'tan-':
            result = Math.atan(value);
            helper = "Tan " + value + " =";
            break;
        case 'log':
            result = Math.log(value);
            helper = "log " + value + " =";
            break;
        case 'log-':
            result = Math.exp(value);
            helper = "Tan " + value + " =";
            break;
        case 'log10':
            result = Math.log10(value);
            helper = "Log10 " + value + " =";
            break;
        case 'square':
            result = Math.pow(value, 2);
            helper = value + "Pow 2 =";
            break;
        case 'third':
            result = Math.pow(value, 3);
            helper = value + "Pow 3 =";
            break;
        case 'root':
            result = Math.sqrt(value);
            
            helper ="Root of"+  value + " =";
            break;
        default:
            break;
    }
    
    // show the result in the input
    document.getElementById('answers').value = result;
    document.getElementById('helper').value = helper;
    
}

function swp() {
    var outputval = document.getElementById('answers').value;
    document.getElementById('input').value = outputval;

}