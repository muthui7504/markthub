import mongoose from 'mongoose';

const supplierSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  companyName: { type: String, required: true },
  companyDescription: String,
  rating: { type: Number, default: 0 },
  categories: [String], // Product categories supplied
  location: String,
});

const supplierModel = mongoose.model('Supplier', supplierSchema);

export default supplierModel;