const bcrypt = require('bcrypt') 

function hashPassword(password) {
    const saltRound = 10
    return bcrypt.hashSync(password,saltRound)
}
function matchPassword(password,hash) {
    return bcrypt.compareSync(password,hash)
}

module.exports = {
    hashPassword,
    matchPassword
}