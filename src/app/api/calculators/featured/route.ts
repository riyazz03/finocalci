import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/database/mongodb';
import { Calculator } from '@/models';

export async function GET() {
  try {
    await connectToDatabase();
    
    const featuredCalculators = await Calculator.find({ 
      published: true, 
      featured: true 
    })
      .select('title slug description category popularityScore views')
      .sort({ popularityScore: -1 })
      .limit(8);

    return NextResponse.json({
      success: true,
      data: featuredCalculators
    });
  } catch (error) {
    console.error('Error fetching featured calculators:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch featured calculators' },
      { status: 500 }
    );
  }
}