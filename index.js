

function intToBin(n){
    let bitStr = "";
    while(n>0){
        bitStr = (n%2)+bitStr;
        n=Math.floor(n/2);
        console.log("bitstr: "+bitStr+", n: "+n);
    }
    return parseInt(bitStr);
}

let num = process.argv[2];


console.log("Converting "+num+" to binary.");
console.log(intToBin(num));