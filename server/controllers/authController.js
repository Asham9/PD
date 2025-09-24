import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../modules/adminModel.js';

const buildCookieOptions = () => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
  maxAge: 24 * 60 * 60 * 1000,
});

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: admin._id, role: 'admin' }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    admin.lastLogin = new Date();
    await admin.save({ validateBeforeSave: false });

    res.cookie('adminToken', token, buildCookieOptions());
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getAdminProfile = async (req, res) => {
  const admin = await Admin.findById(req.admin.id).select('email createdAt lastLogin');
  if (!admin) {
    return res.status(404).json({ message: 'Admin not found' });
  }

  res.status(200).json({
    admin: {
      email: admin.email,
      createdAt: admin.createdAt,
      lastLogin: admin.lastLogin,
    },
  });
};

export const logoutAdmin = async (req, res) => {
  res.clearCookie('adminToken', buildCookieOptions());
  res.status(200).json({ message: 'Logged out successfully' });
};
