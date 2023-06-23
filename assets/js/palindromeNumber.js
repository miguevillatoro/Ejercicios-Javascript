var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    // Guarda el número
    let num = x; 
    
    //Guarda el reverso del número
    let reverse = 0; 

    while (num > 0) {
        reverse = reverse * 10 + num % 10;
        num = parseInt(num / 10);
    }
    
    //Estrictamente el reverso del número
    return x === reverse;
};