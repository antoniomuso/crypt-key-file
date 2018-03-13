# crypt-key-file
Extension of [crypto](https://nodejs.org/api/crypto.html#crypto_class_cipher) Symmetric key API that uses files as keys.

## Getting Started
```js
var { createCypher, createDecypher } = require('crypt-key-file')
var fs = require('fs')

;(async function () {
    var ws = fs.createWriteStream('./crypted')
    var rs = fs.createReadStream('./LICENSE')
    // algoritms are sames of crypto
    // file README is the key 
    var cypher = await createCypher('aes192','./FILEKEY.mp4')
    rs.pipe(cypher).pipe(ws)
})()
```

```js
;(async function () {
    var ws = fs.createWriteStream('./decrypt')
    var rs = fs.createReadStream('./crypted')
    var cypher = await createDecypher('aes192','./FILEKEY.mp4')
    rs.pipe(cypher).pipe(ws)
})()

```
