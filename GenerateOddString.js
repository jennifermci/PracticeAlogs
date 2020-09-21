var generateTheString = function(n) {
    if (n % 2 === 0) {
        let str = "";
        for (let i = 0; i < n - 1; i++) {
            str += "a";
        }
        return str + "b";
    }
    
    let str = "";
    for (let i = 0; i < n; i++) {
        str += "a";
    }
    return str;
};