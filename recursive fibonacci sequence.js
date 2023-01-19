function rfib(n){
    if(n<2){
        return n
    }
    return rfib(n-1)+rfib(n-2)
}

console.log(rfib(0))
console.log(rfib(1))
console.log(rfib(6))