import bcrypt from 'bcrypt'

let salt = bcrypt.genSaltSync(10)

const bcryptPassword = {

    hashPassword(plainPassword) {
        return bcrypt.hashSync(plainPassword, salt)
    },
    
    comparePassword(plain, hash) {
        return bcrypt.compareSync(plain, hash)
    }
    
}

export default bcryptPassword