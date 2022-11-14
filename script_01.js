
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten :
4. Ausgabe in Konsole : check!
*/



// module: multiplikation zahl1 * zahl2 | test
output(div(4 , 5));
output(div(2 , -3));
output(div(2,0));
function div(zahl1, zahl2) {
    if (zahl2 == 0) {
        output("Division durch 0 nicht möglich");
    }
    else {
        return zahl1 / zahl2;
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
    console.log(outputData);
}

