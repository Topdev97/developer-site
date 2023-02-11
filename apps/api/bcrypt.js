import bcrypt from 'bcrypt'

function hashPassword(password) {
    const saltRound = 10
    return bcrypt.hashSync(password,saltRound)
}
function matchPassword(password,hash) {
    return bcrypt.compareSync(password,hash)
}

export {
    hashPassword,
    matchPassword
}