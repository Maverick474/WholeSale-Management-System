import React, { useState } from 'react';

const StockCheck = () => {
    const [stockId, setStockId] = useState('');
    const [quantity, setQuantity] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleCheckStock = () => {
        // Validate inputs
        if (!stockId || !quantity) {
            setError('Please enter both Stock ID and Required Quantity.');
            return;
        }

        if (!Number.isInteger(Number(stockId)) || !Number.isInteger(Number(quantity))) {
            setError('Stock ID and Required Quantity must be integers.');
            return;
        }

        setError(''); // Clear any previous error

        fetch(`http://localhost:5000/api/stock/check?id=${stockId}&requiredQuantity=${quantity}`)
            .then(response => response.json())
            .then(data => setResult(data))
            .catch(error => {
                console.error('Error checking stock:', error);
                setError('An error occurred while checking stock.');
            });
    };

    return (
        <div>
            <h1>Check Stock Availability</h1>
            <div className='container'>
                <div>
                    <label>
                        Stock ID:
                        <input
                            type="text"
                            value={stockId}
                            onChange={e => setStockId(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Required Quantity:
                        <input
                            type="text"
                            value={quantity}
                            onChange={e => setQuantity(e.target.value)}
                        />
                    </label>
                </div>
                <button onClick={handleCheckStock} className='btn'>Check</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {result && (
                    <div>
                        {result.available ? (
                            <p style={{color: "#009879", marginTop: "5px"}}>Stock is available.</p>
                        ) : (
                            <p style={{color: "red", marginTop: "5px"}}>Stock is not available. Expected delivery date: 12/02/24</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default StockCheck;
