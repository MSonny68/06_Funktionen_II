
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

//startApp();
function startApp() {
    output(calculator(getNumber("erste"),getNumber("zweite"),getOp()));
}

function getNumber(stelle) {
    let inputStr = prompt("Bitte " + stelle + " Zahl eingeben: ")
    let num = parseInt(inputStr);
    return num;
}



output(getOp());
function getOp() {
    let op = prompt("Bitte Operator eingeben:");
    if (isOpValid(op)) {
        return "operator ok";
    } else {
        return "operator falsch";
    }
}   

function isOpValid(op) {
    return op == "+" || op == "-" || op == "*" ||  op == "/" || op == ":" 
    
}


// module: calculator | testS.
// agreement  : "+","-","*","/"
// output(calculator(2,2,"+"));
// output(calculator(2,2,"-"));
// output(calculator(2,2,"*"));
// output(calculator(2,2,"/"));
//  output(calculator(2,0,":"));

// output(calculator(2,2," "));
function calculator(a,b,op) {
    switch (op) {
        case "+": //addition
            return add(a,b);
        
        case "-": //subtraktion
            return sub(a,b);
        
        case "*": //multiplikation
            return mult(a,b);
           
        case "/": //division
        case ":":
            return div(a,b);
          
        default:    // error
            return "Etwas ist schief gelaufen!"
          
    }
    
}


//module: division zahl1 / zahl2 | test
// output(div(4 , 5));
// output(div(2 , -3));
// output(div(2,0));
function div(zahl1, zahl2) {
    if (zahl2 != 0) {
        
        return zahl1 / zahl2;
        
    } else {
        return("Division durch 0 nicht möglich");
    }    
}  


// // module: multiplikation zahl1 * zahl2 | test
// output(mult(4 , 5));
// output(mult(2 , -3));
// output(mult(2,0));
function mult(zahl1, zahl2) {
    return zahl1 * zahl2;
}  


// // module: addition zahl1+zahl2 | test
// output(add(4 , 5));
// output(add(2 , -3));
// output(add(2,0));
function add(zahl1, zahl2) {
    return zahl1 + zahl2;
}  

// module: subtraktion zahl1 - zahl2
// output(sub(4 , 5));
// output(sub(2 , -3));
// output(sub(2,0));
function sub(zahl1, zahl2) {
    return zahl1 - zahl2;
}


// module: console output | test
// output("Hello");
// output(2);
function output(outputData) {

    if (typeof outputData == "number") {
        console.log("das Ergebnis ist: "+ outputData);
    } else {
        console.log("Error: " + outputData);
    }
}



    

