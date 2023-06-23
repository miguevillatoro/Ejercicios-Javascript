let simbolos = ["I", "V", "X", "L", "C", "D", "M"];
let valores = [1, 5, 10, 50, 100, 500, 1000];

var romanToInt = function(s) {
    let resultado = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        let actual = valores[simbolos.indexOf(s[i])]
        let derecha = valores[simbolos.indexOf(s[i+1])]
        
        if (actual < derecha) {
            resultado -= actual;
        } else {
            resultado += actual
        }
    }

    return resultado;
}