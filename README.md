# crypt-key-file
Extension of [crypto](https://nodejs.org/api/crypto.html#crypto_class_cipher) Symmetric key API that uses a file as a key.

## Getting Started
```js
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
```

```js
;(async function () {
    var ws = fs.createWriteStream('./decrypt')
    var rs = fs.createReadStream('./crypted')
    var cypher = await createDecypher('aes192','./README.md')
    rs.pipe(cypher).pipe(ws)
})()
*/
```