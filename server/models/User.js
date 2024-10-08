import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String },
  phoneNumber: { type: String },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  registrationDate: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);
export default User;
