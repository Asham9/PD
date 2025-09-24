// backend/seed/seedAdmin.js
import dotenv from 'dotenv';
dotenv.config()
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import Admin from '../modules/adminModel.js';
import connectDB from '../db/connect.js'

dotenv.config();

const createAdmin = async () => {
  try {
   
    await connectDB(process.env.MONGO_URI);
    const hashedPassword = await bcrypt.hash('secret123', 10);

    const adminExists = await Admin.findOne({ email: 'admin@aisolutions.com' });
    if (adminExists) {
      console.log('Admin already exists.');
      process.exit();
    }

    await Admin.create({
      email: 'admin@aisolutions.com',
      password: hashedPassword,
      lastLogin: new Date(),
    });

    console.log(' Admin user created successfully');
    process.exit();
  } catch (err) {
    console.error('Error creating admin:', err);
    process.exit(1);
  }
};

createAdmin();
