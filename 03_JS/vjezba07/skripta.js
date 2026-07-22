const prazanNiz = []

console.log(prazanNiz)

console.log(prazanNiz.length)

const temp = [4, 1, 9, 15, 17, 27, 30, 33, 26, 18, 14, 8,]

console.log(temp)
console.table(temp)

console.log(temp[0])

console.log(temp[temp.length-1])

console.log(temp[5])

// temp = []

temp[5] = 28
console.table(temp)


temp.length=10
console.table(temp)

temp.length = temp.length + 1
console.log(temp)
console.log(temp[length-1])
temp[20] = 77
console.log(temp)

const mjesta = [
    'Osijek',
    'Zagreb',
    'Split',
    'Zadar',
    'Dubrovnik',
    'Šibenik',
]

console.table(mjesta)

const grad = document.getElementById('grad')

grad.innerHTML = mjesta[2]

grad.addEventListener('click',()=>{
    grad.innerHTML = mjesta[0]

})


const ptp = [
    'Edunonva', // String
    18, // number
    18.99, // number
    18n, // bigint
    true, // boolean
    [], // array
    undefined,
    null,
    {ime: 'Pero'}, // objekt
    ()=>{}, // funkcija
    Symbol('id')
]

console.log(ptp)
console.log(ptp[8])
console.log(ptp[8].ime)
console.log(ptp[8]['ime'])

