module.exports = function (playerAction) {
    console.log(playerAction)

    const random = Math.random() * 3
    let computerAction = ''
    if (random < 1) {
        computerAction = 'rock'
    }
    else if (random > 2) {
        computerAction = 'scissor'
    }
    else {
        computerAction = 'paper'
    }

    let result = ''
    if (computerAction === playerAction) {
        result = '平局'
        console.log(result)
    } else if ((computerAction === 'rock' && playerAction === 'paper') || (computerAction === 'scissor' && playerAction === 'rock') || (computerAction === 'paper' && playerAction === 'scissor')) {
        result = 'win'
        console.log(result)
    } else {
        result = 'failed'
        console.log(result)
    }

    return result
}