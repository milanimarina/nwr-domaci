 

let broj = prompt('unesi broj');


function proveraBroja(broj){
    
    if(isNaN (broj)){
        document.write('Uneta vrednost nije broj.')
        return
    }
  
else if(broj % 2==0){
        document.write('Uneta vrednost je paran broj.')
    }else{
        document.write('Uneta vrednost je neparan broj.')
    }

}

proveraBroja(broj)