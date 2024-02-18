const BOARD_SIZE = 16
let NUMBER_OF_SQUARES = 0
let SQUARE_SIZE = 0
const SQUARE_COLOR = 'white'

const setsquares_button = document.querySelector('#setsquares')
setsquares_button.addEventListener('click', setSquares)

const info = document.querySelector('.info')

const clearBoard_button = document.querySelector('#clearBoard')
clearBoard_button.disabled=true

function setInfo(squares){
    info.textContent = 'Current number of squares per side: '+squares
}

function removeSketchboard(){
    const container = document.querySelector('.container')
    container.remove()
}

function createWhiteboard(){
    const body = document.querySelector('body')
    const container = document.createElement('div')
    container.setAttribute('class', 'container')
    container.setAttribute('style', 'height: '+BOARD_SIZE+'cm; width: '+BOARD_SIZE+'cm; display: flex; border: 3px solid black;')
    body.appendChild(container)
    return container
}

function clearboard(){
    clearBoard_button.disabled=false
    clearBoard_button.addEventListener('click', generateSketchboard)
}

function setSquares(){
    let number_of_squares = prompt('Enter the number of squares per side:')
    if(number_of_squares>=10 && number_of_squares<=100){
        NUMBER_OF_SQUARES = number_of_squares
        SQUARE_SIZE = BOARD_SIZE/NUMBER_OF_SQUARES
        setInfo(NUMBER_OF_SQUARES)
        generateSketchboard()
        clearboard()
    }else{
        alert('Setting number of squares per side  to >100 or <10. Valid only from 10 to 100. Please set again.')
    }
}

function generateSketchboard(){
    removeSketchboard()
    const container = createWhiteboard()

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