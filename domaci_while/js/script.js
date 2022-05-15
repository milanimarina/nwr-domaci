

let budzet=1000;
kolNovca='';
while (kolNovca<budzet) {
    budzet=budzet-kolNovca;
    kolNovca=prompt('Unesi kolicinu novca koji zelis da potrosis:')
}    
    if(kolNovca==budzet){
    document.write('Potrosili ste sav novac!');
    }else{
        document.write('Usli ste u minus!')
    }

    





