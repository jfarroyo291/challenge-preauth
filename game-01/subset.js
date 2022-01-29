function subset(m, n) {
    var newArr = [];
    for(var i = 0; i < m.length; i++) {
        for(var j = 0; j < m.length; j++) {
            if(m[i] + m[j] === n){
                newArr.push(m[i], m[j]);
                return newArr;
            }
        }
    }
}