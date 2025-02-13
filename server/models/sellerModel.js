import mongoose from 'mongoose';

const sellerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  businessName: { type: String, required: true },
  businessLocation: String,
  sellerRating: { type: Number, default: 0 },
  preferredCategories: [String], // Preferred product categories
});

const seller = mongoose.model('Seller', sellerSchema);
 export default seller;