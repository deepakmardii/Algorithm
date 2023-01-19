function rfact(n){
    if(n===0){
        return 1
    }
    return n * rfact(n-1)
}

console.log(rfact(0))
console.log(rfact(1))
console.log(rfact(5))