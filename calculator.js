


//for caluclating part

    var second ;
    var first ;
    var sign ;


// document.getElementById("output").innerHTML = "hello";
function calculate()  {
  
    second = document.getElementById("second").value;
    first = document.getElementById("first").value;
    sign = document.getElementById("sign").value;
    

    if (sign == "+") {
    let result = parseFloat(first) + parseFloat(second)
    document.getElementById("output").innerHTML = result;

    } 
    else if(sign == "-") {     
        let result = parseFloat(first) + parseFloat(second)
        document.getElementById("output").innerHTML = result;
    }

    else if(sign == "*") {     
        let result = parseFloat(first) + parseFloat(second)
        document.getElementById("output").innerHTML = result;
    }

     else if(sign == "/") {     
        let result = parseFloat(first) + parseFloat(second)
        document.getElementById("output").innerHTML = result;
    }

}


// To hide the area
function selectedChange(){

    var selectedVal= parseFloat(document.getElementById("sign").selectedIndex);
    var item2 = document.getElementById('second');
    

    item2.disabled = false;
    item2.hidden= false;

    

    if(selectedVal == 5) {
        item2.disabled = true;
        item2.hidden= true;
    } else {
        item2.disabled = false;
        item2.hidden = false;
    }
   

}

function selectarea(){
    var selectedVal= parseFloat(document.getElementById("sign").selectedIndex);
}

//For the calculator
function calculate2(){
    var retval;
    
    second = parseFloat(document.getElementById("second").value);
    first = parseFloat(document.getElementById("first").value);
    var selectedVal= parseFloat(document.getElementById("sign").selectedIndex);
    var area = document.getElementById('area').innerHTML
    sign = document.getElementById("sign").value;
    retval = docalculation(first,second,sign);
    document.getElementById("output").innerHTML = retval;
    var area = document.getElementById('area');
   // ²

   area.hidden = true;
    // for area sign
    if (selectedVal >= 4) {
        area.hidden = false;

    } else {
        area.hidden = true;
    }
    
}
function docalculation(val1,val2,operator='+') {
    
    var result = 0;
    // var operand = document.getElementById("sign").value;
    var operand = operator;
    switch (operand) {
        case '*':
            result = val1 * val2;
            break;
        case '-':
            result = val1 - val2;
            break;
        case '+':
            result = val1 + val2;
            break;
        case '/':
            result = val1 / val2;
            break;
        case '◻':
            result = val1 * val2;
           
            break;
        case '○':
            result = val1 * 2 * 3.14;
            
            break;
        case '△':
            result = (val1/ 2) * val2;
            area
            break;
            
        default: 
        result = val1 + val2;
            break;

    }
    return result;

}