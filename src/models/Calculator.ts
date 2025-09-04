import mongoose, { Schema, Document } from 'mongoose';
import { Calculator as CalculatorType } from '@/types/calculator';

interface CalculatorDocument extends Omit<CalculatorType, '_id'>, Document {}

const InputFieldSchema = new Schema({
  name: { type: String, required: true },
  label: { type: String, required: true },
  type: { 
    type: String, 
    required: true,
    enum: ['currency', 'percentage', 'number', 'date', 'select']
  },
  required: { type: Boolean, default: true },
  placeholder: String,
  helpText: String,
  unit: String,
  validation: {
    min: Number,
    max: Number
  },
  options: [String],
  order: { type: Number, required: true }
}, { _id: false });

const OutputFieldSchema = new Schema({
  name: { type: String, required: true },
  label: { type: String, required: true },
  type: { 
    type: String, 
    required: true,
    enum: ['currency', 'percentage', 'number', 'text']
  },
  description: String,
  order: { type: Number, required: true }
}, { _id: false });

const CalculatorSchema = new Schema<CalculatorDocument>({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  description: { type: String, required: true },
  metaDescription: String,
  keywords: [String],
  category: { type: String, required: true },
  inputFields: [InputFieldSchema],
  outputFields: [OutputFieldSchema],
  formula: { type: String, required: true },
  content: String,
  views: { type: Number, default: 0 },
  featured: { type: Boolean, default: false },
  published: { type: Boolean, default: true },
  popularityScore: { type: Number, default: 0 }
}, {
  timestamps: true
});

export default mongoose.models.Calculator || mongoose.model<CalculatorDocument>('Calculator', CalculatorSchema);