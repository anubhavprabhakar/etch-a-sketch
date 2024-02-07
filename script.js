const BOARD_SIZE = 16
const NUMBER_OF_SQUARES = 100
const SQUARE_SIZE = BOARD_SIZE/NUMBER_OF_SQUARES
const SQUARE_COLOR = 'white'

const container = document.querySelector('.container')
container.setAttribute('style', 'height: '+BOARD_SIZE+'cm; width: '+BOARD_SIZE+'cm; display: flex; border: 3px solid black;')

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
    console.log(event)
})