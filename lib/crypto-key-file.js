const crypto = require('crypto')
const fs = require('fs')

function readFileKey (key_filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(key_filename, (err, data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
}

module.exports = {

    createCypher(algoritm, key_filename) {
        return readFileKey(key_filename)
            .then((key) => {
                return Promise.resolve(crypto.createCipher(algoritm, key))
            })

    },

    createDecypher(algoritm, key_filename) {
        return readFileKey(key_filename)
            .then((key) => {
                return Promise.resolve(crypto.createDecipher(algoritm, key))
            })
    }

}