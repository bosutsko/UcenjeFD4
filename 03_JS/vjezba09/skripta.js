// ponavljanje (iteracija), petlje (loops)

console.log('Edunova')


console.log('====================')

for(let i=0;i<10;i++){
    console.log('Edunova')
}

console.log('====================')


for(let i=0;i<10;i++){
    console.log(`i=${i+1}`)
}

console.log('====================')

let suma=0

for(let i=0;i<100;i++){
    suma += i+1
  //  debugger
}

console.log(suma)


console.log('====================')

for(let i=10;i>0;i--){
    console.log(i)
}

console.log('====================')


for(let i=7; i<20;i+=2){
    console.log(i)
}


console.log('====================')



const pocetak = 7
const kraj = 20
const uvecanje = 2

for(let i = pocetak; i < kraj; i+=uvecanje){
    console.log(i)
}


console.log('====================')


for(let i = kraj; i<pocetak; i++){
    console.log('Ovo se ne ispisuje jer nije ušao u petlju')
}

console.log('====================')


for(let i = 1; i<=50; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

console.log('====================')

suma = 0
for(let i=7; i<=77; i++){
    if(i%2 ===1){
        suma+=i
    }
}
console.log(suma)

console.log('====================')



let prim = true
const broj = 73

for(let i=2;i<broj;i++){
    if(broj %i ===0){
        prim=false
    }else{
        if(i%10000 === 0){
        console.log(i)
        }
    }

}

console.log(prim ? 'PRIM' : 'NIJE PRIM')

