import jwt from 'jsonwebtoken';

export const adminAuth = (req, res, next) => {
  const token = req.cookies.adminToken; // get from cookie

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    req.admin = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token invalid or expired' });
  }
};
