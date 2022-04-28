
let robot ={
    nome: 'JS',
    year: 2022,
    type: 'xyz',
    start(){
        console.log('Robot je pokrenut.')
    },
    controls:{
    left(){
        console.log('Robot ide levo.')
    },
    right(){
        console.log('Robot ide desno.')

    },
    jump(){
        console.log('Robot skace!')
    },

}


};
robot.start()
robot.controls.left()
robot.controls.right()
robot.controls.jump()




