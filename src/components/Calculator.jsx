import React, { useState } from 'react';

export default function Calculator() {
  const [amount, setAmount] = useState(0);
  const [feeRate, setFeeRate] = useState(2.8);  
  const [calculatedFee, setCalculatedFee] = useState(0);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const calculateFee = () => {
    setCalculatedFee(amount * (feeRate / 100));
  };

  return (
    <section className="py-20 bg-glass text-center">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">수수료율 계산기</h2>
        <input 
          type="number" 
          value={amount} 
          onChange={handleChange} 
          placeholder="결제 금액 입력" 
          className="p-4 rounded-xl bg-dark text-white mb-4"
        />
        <button onClick={calculateFee} className="px-6 py-3 bg-brand rounded-xl text-white hover:bg-blue-700 transition">계산하기</button>
        {calculatedFee > 0 && (
          <div className="mt-6">
            <p className="text-xl text-white">수수료: {calculatedFee.toFixed(2)} 원</p>
          </div>
        )}
      </div>
    </section>
  );
}
