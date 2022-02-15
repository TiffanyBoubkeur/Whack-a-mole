console.log("Let's gooooo"); 

//Main Code
const squares = document.querySelectorAll('.square')
const mole    = document.querySelectorAll('.mole')
let timeLeft  = document.getElementById('time-left')
let score     = document.getElementById ('score')

let result    = 0
let ourTimer  = timeLeft.textContent

// Actions 
moveMole()
timerId = setInterval(countDown, 1000)

//Functions
function randomSquare(){
    squares.forEach(className => {  //arrow function
        className.classList.remove('mole')
    })

    // random position of the mole
    randomPosition = squares[Math.floor(Math.random()*9)]
    randomPosition.classList.add('mole')

    // id for hit position 
    hitPosition = randomPosition.id
}   

// if square id = id hit position increase result by 1
squares.forEach(id =>{
    id.addEventListener('mouseup', ()=>{
        if(id.id === hitPosition){
            result = result +1
            score.textContent = result
        }
    })
})

// Move the Move every sec
function moveMole(){
    let timerId = null
    timerId = setInterval(randomSquare, 500) //1000 not fast enough

}

// TIME LEFT 
function countDown(){
    ourTimer --
    timeLeft.textContent = ourTimer

    if(ourTimer === 0){
        clearInterval(timerId)
        alert('Game Over, your final score is ' + result)
    }
}



