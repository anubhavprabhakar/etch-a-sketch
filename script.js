const BOARD_SIZE = 16
let NUMBER_OF_SQUARES = 0
let SQUARE_SIZE = 0
const SQUARE_COLOR = 'white'

const setsquares_button = document.querySelector('#setsquares')
setsquares_button.addEventListener('click', setSquares)

function setSquares(){
    let number_of_squares = prompt('Enter the number of squares per side:')
    if(number_of_squares>=10 && number_of_squares<=100){
        NUMBER_OF_SQUARES = number_of_squares
        SQUARE_SIZE = BOARD_SIZE/NUMBER_OF_SQUARES
        generateSketchboard()
    }else{
        alert('Setting number of squares per side  to >100 or <10. Valid only from 10 to 100. Please set again.')
    }
}

const container = document.querySelector('.container')
container.setAttribute('style', 'height: '+BOARD_SIZE+'cm; width: '+BOARD_SIZE+'cm; display: flex; border: 3px solid black;')

function generateSketchboard(){
    for(let i = 1; i<=NUMBER_OF_SQUARES; i++){
        const line = document.createElement('div')
        line.classList.add('line')

        container.appendChild(line)
        line.setAttribute('style', 'background-color: aqua; height: '+SQUARE_SIZE+'cm; width: '+SQUARE_SIZE+'cm;');

        for(let i = 1; i<=NUMBER_OF_SQUARES; i++){
            const div = document.createElement('div')
            div.setAttribute('style', 'background-color: '+SQUARE_COLOR+'; height: '+SQUARE_SIZE+'cm;')
            line.appendChild(div)
        }
    }
    container.addEventListener('mousemove', (event)=>{
        const square = event.target
        square.style.backgroundColor = 'red'
        // console.log(square)
    })
}

