let ret = [
    {
        num: 1,
        price: 10
    },
    {
        num: 2,
        price: 20
    },
    {
        num: 1,
        price: 30
    }
]


console.log(ret.reduce((total, ret)=>{
    return total + ret.num * ret.price
}, 0))
