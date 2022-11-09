import jwt from 'jsonwebtoken'

function generateAccessToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1800s' });
}


export default generateAccessToken