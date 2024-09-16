const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).send('Unauthorized: No token provided');
    }

    try {
        const decoded = jwt.verify(token.split(' ')[1], 'j34ty387t3t3u3yt7u3t73t');
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).send('Unauthorized: Invalid token');
    }
}

module.exports = verifyToken;
