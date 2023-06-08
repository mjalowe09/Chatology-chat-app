const jwt  = require ('jsonwebtoken')

const generateToken = (id) => {
    return jwt.sign({id},"jalowe",{
        expiresIn:"30d"
    })
}

module.exports = generateToken