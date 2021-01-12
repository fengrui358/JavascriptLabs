const cluster = require('cluster')
const os = require('os')

if (cluster.isMaster) {
    for (let index = 0; index < os.cpus.length / 2  ; index++) {
        cluster.fork()
    }
}
else {
    require('./app')
}