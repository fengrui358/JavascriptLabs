const _ = require('lodash')

const saves = ['profile', 'settings']

const done = _.after(saves.length, () => console.log('done saving!'))
for (let index = 0; index < 5; index++) {
    console.log(`第 ${index + 1} 次运行 done`)
    done()
}