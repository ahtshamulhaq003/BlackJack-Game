let player = {
    name: "Ahtsham",
    balance: 200
}
let cards=[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEL=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.balance
function getRandomCard(){
    let randomNumber= Math.floor(Math.random()*13)+1
    //since in this you will get reward betweem 2 to 11 ( 11 for A, 2 to 10 for simple cards
    //and also 10 for J Q K)
    if(randomNumber===1){
        return 11
    }
    else if(randomNumber>10){
        return 10
    }
    else{
        return randomNumber
    }
}
function renderGame() {
    sumEL.textContent="Sum : "+ sum
    cardsEl.textContent="Cards: "
     for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
        }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
function startGame(){
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards=[firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function newCard(){
    if(hasBlackJack===false && isAlive===true){
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }
    
}
