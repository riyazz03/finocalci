'use client';

import { useState } from 'react';

export default function Homepage() {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculateSum = () => {
    const n1 = parseFloat(num1) || 0;
    const n2 = parseFloat(num2) || 0;
    setResult(n1 + n2);
  };

  const clearCalculation = () => {
    setNum1('');
    setNum2('');
    setResult(null);
  };

  return (
    <div className="homepage">
      <header className="hero-section">
        <div className="container">
          <h1 className="hero-title">FinoCalci</h1>
          <p className="hero-subtitle">Professional Finance Calculator Platform</p>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <section className="calculator-demo">
            <h2 className="section-title">Addition Calculator Demo</h2>
            
            <div className="calculator-card">
              <div className="calculator-header">
                <h3>Simple Addition Calculator</h3>
                <p>Add two numbers together instantly</p>
              </div>

              <div className="calculator-form">
                <div className="input-group">
                  <label htmlFor="num1" className="input-label">First Number</label>
                  <input
                    type="number"
                    id="num1"
                    className="calculator-input"
                    placeholder="Enter first number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                  />
                </div>

                <div className="operator">+</div>

                <div className="input-group">
                  <label htmlFor="num2" className="input-label">Second Number</label>
                  <input
                    type="number"
                    id="num2"
                    className="calculator-input"
                    placeholder="Enter second number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                  />
                </div>

                <div className="button-group">
                  <button 
                    onClick={calculateSum}
                    className="calculate-btn"
                  >
                    Calculate
                  </button>
                  <button 
                    onClick={clearCalculation}
                    className="clear-btn"
                  >
                    Clear
                  </button>
                </div>

                {result !== null && (
                  <div className="result-section">
                    <div className="result-label">Result:</div>
                    <div className="result-value">{result}</div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}