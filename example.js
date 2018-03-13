var {createCypher, createDecypher} = require('./lib/crypto-key-file')
var fs = require('fs')

;(async function () {
    var ws = fs.createWriteStream('./crypted')
    var rs = fs.createReadStream('./LICENSE')
    // algoritm are same of crypto
    // file README is key 
    var cypher = await createCypher('aes192','./README.md')
    rs.pipe(cypher).pipe(ws)
})()


/*
;(async function () {
    var ws = fs.createWriteStream('./decrypt')
    var rs = fs.createReadStream('./crypted')
    var cypher = await createDecypher('aes192','./README.md')
    rs.pipe(cypher).pipe(ws)
})()
*/