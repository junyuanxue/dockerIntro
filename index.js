var generateName = require('sillyname')

require('http').createServer(function (req, res) {
    res.end('Je m\'appelle ' + generateName())
}).listen(8080)

console.log('Listening at http://localhost:8080')
