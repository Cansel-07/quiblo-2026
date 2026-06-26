import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  
  stripeProductId: { type: String },
  stripePriceId: { type: String },
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
