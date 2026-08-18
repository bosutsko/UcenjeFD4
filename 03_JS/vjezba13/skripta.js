console.log('Početak')

const i = 7

const rezultat = i + varijabla

console.log(rezultat)

console.log('Kraj')

try{

console.log('Početak')
const i = 7
const rezultat = i + varijabla
console.log(rezultat)

}catch(e){

console.log('Greška')
console.log(e.name)
console.log(e.message)
console.error(e)
}

console.log('Kraj')



console.log('2. primjer - bolji')

const i = 7
let rezultat = 0
try {
rezultat = i + varijabla
} catch{
    rezultat = i + 1
} finally {
    console.log(rezultat)
}

console.log('Kraj primjer 2')


function korijen(broj){
    return Math.sqrt(broj)
}


console.log(korijen(1))