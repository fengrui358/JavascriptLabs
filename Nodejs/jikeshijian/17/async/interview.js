(async function () {
    try {
        await interview(1)
        await interview(2)
        await interview(3)
        console.log('smile')
    } catch (error) {
        console.log('cry')
    }
})()

async function interview(round) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                console.log(`pass round ${round}`)
                resolve('success')
            }
            else {
                reject(new Error(`fail at round ${round}`))
            }
        }, 500);
    })
}