var lengthOfLastWord = function(s) {
    let i = s.length - 1;
    while (i >= 0 && s[i] === ' ') {
        --i;
    }

    let j = i;
    while (j >= 0 && s[j] !== ' ') {
        --j;
    }
    //Longitud de la última palabra
    return i - j;
};