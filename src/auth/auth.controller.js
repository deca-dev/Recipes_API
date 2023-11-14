const { getUserByEmail } = require("../users/users.controllers")
const {comparePassword} = require('../utils/crypto')

const loginUser = async (email, password) => { //? Receives email and plain Password, brings the user based on email, and compares plainPassword against Hashed Password and returns user if successful comparison
       try {
        const user = await getUserByEmail(email)
        const verifyPassword = comparePassword(password, user.password)
        if(verifyPassword) {
            return user
        }
        return false
       } catch (error) {
        return error
       }
};
   
module.exports = {
    loginUser 
}
