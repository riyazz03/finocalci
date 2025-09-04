import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/database/mongodb';
import { Calculator } from '@/models';

interface RouteParams {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(
  request: NextRequest,
  context: RouteParams
) {
  try {
    await connectToDatabase();
    
    const { slug } = await context.params;
    
    const calculator = await Calculator.findOne({ 
      slug: slug, 
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