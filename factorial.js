function fact(n){
    let result=1;
    for(let i=2;i<=n;i++){
        result=result*i;
    }
    return result
}

console.log(fact(2))
console.log(fact(4))
console.log(fact(5))