const game = require('./lib')

let failedCount = 0

function playAndRecord(playerAction) {
    let result = game(playerAction)
    if (result === 'failed') {
        failedCount++
        console.log(`失败${failedCount}次`)
    }
}

let playerAction = process.argv[2];
if (playerAction) {
    playAndRecord(playerAction)
}

process.stdin.on('data', e => {
    if (failedCount < 3) {
        playerAction = e.toString().trim()
        playAndRecord(playerAction)
    } else {
        process.exit()
    }
})
