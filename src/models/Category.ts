import mongoose, { Schema, Document } from 'mongoose';
import { Category as CategoryType } from '@/types/calculator';

interface CategoryDocument extends Omit<CategoryType, '_id'>, Document {}

const CategorySchema = new Schema<CategoryDocument>({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  description: String,
  icon: String,
  order: { type: Number, default: 0 },
  calculatorsCount: { type: Number, default: 0 }
}, {
  timestamps: true
});

CategorySchema.index({ slug: 1 });
CategorySchema.index({ order: 1 });

export default mongoose.models.Category || mongoose.model<CategoryDocument>('Category', CategorySchema);