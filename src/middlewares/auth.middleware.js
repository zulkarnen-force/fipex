import jwt from 'jsonwebtoken';
import http from 'http';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.status(401).json({
    error: "Unauthorized" 
  })

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    console.log(err)

    if (err) return res.status(403).json({
        error:"forbidden"
    })

    req.user = user

    next()
  })
}

export default authenticateToken