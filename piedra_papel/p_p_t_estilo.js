

let jugador1 = ('Jugador 1 elige')
let jugador2 = ('Jugador 2 elige')
// let tijera = 'tijera'
// let piedra = 'piedra'
// let papel = 'papel'

let tijera = document.getElementById('tijera')
let piedra = document.getElementById('piedra')
let papel = document.getElementById('papel')
let mostrar = document.getElementById('mostrar')

const card1 = () => {
  if(jugador1 == 'piedra' && jugador2 == 'papel') {
    console.log('Jugador 2 gana');
  }else if(jugador1 == 'piedra' && jugador2 == 'tijera'){
    console.log('Jugador 1 gana');
  }else if(jugador1 == 'tijera' && jugador2 == 'papel'){
    console.log('Jugador 1 gana');
  }else if(jugador1 == 'tijera' && jugador2 == 'papel'){
    console.log('Jugador 1 gana');
  }else if(jugador1 == 'piedra' && jugador2 == 'papel'){
    console.log('Jugador 2 gana');
  }else if(jugador1 == 'papel' && jugador2 == 'tijera'){
    console.log('Jugador 2 gana');
  }else{
    console.log('Empate');
  }
}
































