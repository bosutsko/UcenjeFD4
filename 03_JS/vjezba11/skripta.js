

const isDev = true

odradi()

function odradi(){
    let i = 0
    i += 3
    console.log('poziv funkcije 1. odradi', i)
}

odradi()



document.getElementById('gumb2').addEventListener('click',odradi)

document.getElementById('gumb3').addEventListener('click',function(){
    console.log('Poziv iz bezimene funkcije')
})

function parniBrojevi(odBroja, doBroja){
    for(let i = odBroja; i <= doBroja; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }
}

parniBrojevi(2,8)
parniBrojevi(100,110)

function log(poruka){
    if(!isDev){
        return
    }
    console.log('\n')
    console.log('+-----------------------------+')
    console.log(poruka)
    console.log('+-----------------------------+')
}

log('testiranje log funkcije')


log('Edunova')


/**
 * Funkcija radi kako je opisano
 * @param {*} odBroja cijeli broj
 * @param {*} doBroja cijeli broj
 * @returns slučajni broj
 */
function slucajniBroj(odBroja=0, doBroja=0){
    if(odBroja && doBroja){

        return (Math.random()*(doBroja - odBroja) + odBroja).toFixed(0)

    }

    if(odBroja && !doBroja){
        return (Math.random()*odBroja).toFixed(0)
    }

    return Math.random()
}

slucajniBroj()


const sb = slucajniBroj()

log(sb)


log(slucajniBroj())


for(let i=0;i<6;i++){
    console.log(slucajniBroj(1,45))
}

log(slucajniBroj(20))
