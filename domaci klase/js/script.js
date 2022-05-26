

class Phone{
    constructor (model,trajanjeGarancije,godProizvodnje,procenatBaterije){
        this.model = model
        this.trajanjeGarancije = trajanjeGarancije
        this.godProizvodnje = godProizvodnje
        this.procenatBaterije = procenatBaterije
        this.isTurnOn = false
    }
    turnOn(){

         if( this.procenatBaterije === 0){
            console.log ('Baterija telefona je prazna')
         }
         else if(this.isTurnOn === true){
            console.log ('Telefon je vec ukljucen!')
                
        }
        else{
            this.isTurnOn = true
            console.log ('Telefon je ukljucen!')
            
         

        }

    }

    turnOff(){
        if(this.isTurnOn === false)
            console.log('Telefon je vec iskljucen!')
        
        else {
            this.isTurnOn = false
            console.log ('Telefon je iskljucen!')
        }
        }
    rokTrajanjaGarancije(){

            let currentYear = new Date().getFullYear()
            let ukupno = this.godProizvodnje + this.trajanjeGarancije;
            
            if( ukupno  < currentYear){
                console.log('Garancija ovog telefona je istekla!')
            }else{
                let godGarancije = ukupno - currentYear;
                console.log(`Garancija ovog telefona traje jos: ${godGarancije} godina.`)

                
            }
            
        }
        set setprocenatBaterije(noviProcenat){
            this.procenatBaterije = noviProcenat
        }
        }
    

let Samsung = new Phone('Samsung', 5,2019,25)
let Nokia = new Phone('nokia',5,2010,20)


Samsung.turnOff()
Samsung.turnOff()
Samsung.turnOn()
Samsung.turnOn()

//Phone.setprocenatBaterije ='30'
//console.log('Procenat baterije je:',Phone.setprocenatBaterije )

