import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/database/mongodb';
import { Calculator } from '@/models';

export async function GET() {
  try {
    await connectToDatabase();
    
    const calculators = await Calculator.find({ published: true })
      .select('title slug description category featured popularityScore views')
      .sort({ popularityScore: -1 })
      .limit(50);

    return NextResponse.json({
      success: true,
      data: calculators
    });
  } catch (error) {
    console.error('Error fetching calculators:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch calculators' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    
    const body = await request.json();
    const calculator = await Calculator.create(body);

    return NextResponse.json({
      success: true,
      data: calculator
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating calculator:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create calculator' },
      { status: 500 }
    );
  }
}