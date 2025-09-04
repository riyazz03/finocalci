import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/database/mongodb';
import { Calculator } from '@/models';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await connectToDatabase();
    
    const calculator = await Calculator.findOne({ 
      slug: params.slug, 
      published: true 
    });

    if (!calculator) {
      return NextResponse.json(
        { success: false, error: 'Calculator not found' },
        { status: 404 }
      );
    }

    await Calculator.findByIdAndUpdate(calculator._id, {
      $inc: { views: 1 }
    });

    return NextResponse.json({
      success: true,
      data: calculator
    });
  } catch (error) {
    console.error('Error fetching calculator:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch calculator' },
      { status: 500 }
    );
  }
}