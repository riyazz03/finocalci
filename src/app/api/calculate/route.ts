import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { formula, inputs } = await request.json();

    if (!formula || !inputs) {
      return NextResponse.json(
        { success: false, error: 'Formula and inputs are required' },
        { status: 400 }
      );
    }

    const result = executeFormula(formula, inputs);

    return NextResponse.json({
      success: true,
      data: result
    });
  } catch (err) {
    console.error('Calculation error:', err);
    return NextResponse.json(
      { success: false, error: 'Calculation failed' },
      { status: 500 }
    );
  }
}

function executeFormula(formula: string, inputs: Record<string, number | string>) {
  try {
    const func = new Function(...Object.keys(inputs), `
      ${formula}
    `);
    
    return func(...Object.values(inputs));
  } catch {
    throw new Error('Invalid formula execution');
  }
}