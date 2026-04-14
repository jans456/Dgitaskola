function setengah_segitiga(linex) {
    let pola = '';
    for (let i = 1; i <= linex; i++) {
        
        for (let j = 1; j <= i; j++) {
            pola += '*';
        }
     
        pola += '\n';
    }
    return pola;
}

console.log(setengah_segitiga(4));