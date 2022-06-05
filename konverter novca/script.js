
let unosDinari = document.getElementById('unosDinari');
let unosUevrima = document.getElementById('unosUevrima');
let reset = document.getElementById('reset');
let potvrdi = document.getElementById('potvrdi');
let vrednost = 0;

potvrdi.addEventListener('click',()=>{
    
     vrednost = unosDinari.value *117.4
     console.log(vrednost)
     unosUevrima.innerHTML = vrednost
     
     
})
reset.addEventListener('click',()=>{

    unosDinari.value = ''

})