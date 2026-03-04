import jwt from 'jsonwebtoken'

const adminAuth = async (req, res, next) => {
    try {
        // 1. Get token from headers (standard name is 'token' or 'authorization')
        const { token } = req.headers

        if (!token) {
            return res.status(401).json({ success: false, message: "Not Authorized. Please login again." })
        }

        // 2. Verify the token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // 3. Check if the decoded payload matches your admin credentials
        // Note: Ensure this matches EXACTLY how you signed the token in your login controller
        const adminIdentifier = process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD;

        if (token_decode !== adminIdentifier) {
            return res.status(401).json({ success: false, message: "Invalid Token. Access Denied." })
        }

        // 4. Everything is good, move to the next function
        next()

    } catch (error) {
        console.error("Auth Error:", error);
        // If jwt.verify fails, it throws an error (e.g., token expired)
        res.status(401).json({ success: false, message: "Session expired or invalid token." })
    }
}

export default adminAuth