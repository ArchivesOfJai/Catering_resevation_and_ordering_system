import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const authMiddleware = (role = '') => async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user || (role && user.role !== role)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export default authMiddleware;
