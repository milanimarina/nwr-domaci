
 let prviBr = +prompt('unesi prvi broj:');
 let drugiBr = +prompt('unesi drugi broj:');
 let treciBr = +prompt('unesi treci broj:');
 
 function pronadjiNajveci (prviBr,drugiBr,treciBr) {
     
     
     
     if (prviBr>drugiBr){
         max = prviBr;

     }
     else{
         max = drugiBr;
     }
     if(treciBr>max){
         max=treciBr
         console.log('Najveci broj je:'+max)
         return
     }
     console.log('Najveci broj je:'+max)

    }
pronadjiNajveci(prviBr,drugiBr,treciBr);
    
    

