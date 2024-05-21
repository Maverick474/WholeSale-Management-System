const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT;

app.use(cors()); 

// DONOT touch anything from above

// You can Add Delete or Update the records listed below

let stock = [
    { id: 100, name: 'Head&Shoulders', quantity: 100 },
    { id: 110, name: 'Pringles', quantity: 10 },
    { id: 120, name: 'Lays', quantity: 50 },
    { id: 130, name: 'Mitchells Ketchup', quantity: 30 },
    { id: 140, name: 'Snickers', quantity: 7 },
    { id: 145, name: 'Pepsi', quantity: 120 },
    { id: 175, name: 'MilkPak', quantity: 70 },
    { id: 180, name: 'Mars', quantity: 21 },
    { id: 190, name: 'Red Bull', quantity: 12 },
    { id: 195, name: 'Olpers', quantity: 70 },
    { id: 200, name: 'K&Ns', quantity: 30 },
    { id: 210, name: 'Dawn Bread', quantity: 55 },
    // add delete or update stock items
];

let buyers = [
    { id: 1, name: 'Farhan', address: 'Lahore Cantt', stockId: 100 },
    { id: 2, name: 'Sajid', address: 'DHA phase III', stockId: 110 },
    { id: 3, name: 'Makeen', address: 'DHA phase VI', stockId: 120 },
    { id: 4, name: 'Ali', address: 'Model Town', stockId: 130 },
    { id: 5, name: 'Osama', address: 'Jail Road', stockId: 145 },
    { id: 6, name: 'Haseeb', address: 'Mughal Pur', stockId: 175 },
    { id: 7, name: 'Qasim', address: 'Liberty Town', stockId: 180 },
    { id: 8, name: 'Sultan', address: 'Gulberg', stockId: 180 },
    { id: 9, name: 'Dawood', address: 'Zahoor Elahi Road', stockId: 190 },
    { id: 10, name: 'Abu Bakr', address: 'Liberty Town', stockId: 195 },
    { id: 11, name: 'Zaid', address: 'DHA Phase VI', stockId: 200 },
    // add delete or update buyers
];

let customers = [
    { id: 1, name: 'Farhan', address: 'Lahore Cantt' },
    { id: 2, name: 'Sajid', address: 'DHA phase III' },
    { id: 3, name: 'Makeen', address: 'DHA phase VI' },
    { id: 4, name: 'Ali', address: 'Model Town' },
    { id: 5, name: 'Osama', address: 'Jail Road' },
    { id: 6, name: 'Haseeb', address: 'Mulghal pur' },
    { id: 7, name: 'Qasim', address: 'Liberty Town' },
    { id: 8, name: 'Sultan', address: 'Gulberg' },
    { id: 9, name: 'Dawood', address: 'Zahoor Elahi Road' },
    { id: 10, name: 'Abu Bakr', address: 'Liberty Town' },
    { id: 11, name: 'Zaid', address: 'DHA Phase VI' },
    { id: 12, name: 'Shams', address: 'Askari IV' },
    // add delete or update customers
];

let defaulters = [
    { id: 3, name: 'Sajid', pendingAmount: 700 },
    { id: 4, name: 'Ali', pendingAmount: 500 },
    { id: 8, name: 'Sultan', pendingAmount: 300 },
    { id: 9, name: 'Dawood', pendingAmount: 800 },
    { id: 13, name: 'Pasha', pendingAmount: 150 },
    // add delete or update defaulters
];

let payments = [
    { id: 1, name: 'Farhan', status: 'Paid' },
    { id: 3, name: 'Sajid', status: 'Pending' },
    { id: 4, name: 'Ali', status: 'Pending' },
    { id: 5, name: 'Osama', status: 'Paid' },
    { id: 7, name: 'Qasim', status: 'Paid' },
    { id: 8, name: 'Sultan', status: 'Pending' },
    { id: 9, name: 'Dawood', status: 'Pending' },
    { id: 10, name: 'Abu Bakr', status: 'Paid' },
    { id: 11, name: 'Zaid', status: 'Paid' },
    { id: 12, name: 'Shams', status: 'Paid' },
    // add delete or update payment records
];

let profit = [
    {id: 1, customerName: "Farhan", amount: 300},
    {id: 5, customerName: "Osama", amount: 700},
    {id: 7, customerName: 'Qasim', amount: 150 },
    {id: 10, customerName: 'Abu Bakr', amount: 400 },
    {id: 11, customerName: 'Zaid', amount: 600 },
    {id: 12, customerName: 'Shams', amount: 1000 },
    // add delete or update profit records
];

//DONOT touch anything below this
let stockToReorder = stock.filter(item => item.quantity < 20);

app.get('/api/stocks', (req, res) => res.json(stock));
app.get('/api/buyers', (req, res) => res.json(buyers));
app.get('/api/customers', (req, res) => res.json(customers));
app.get('/api/defaulters', (req, res) => res.json(defaulters));
app.get('/api/payments', (req, res) => res.json(payments));
app.get('/api/profit', (req, res) => res.json(profit));
app.get('/api/stocks/reorder', (req, res) => res.json(stockToReorder));

app.get('/api/stock/check', (req, res) => {
    const { id, requiredQuantity } = req.query;
    const item = stock.find(s => s.id === parseInt(id));
    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }

    if (item.quantity >= requiredQuantity) {
        return res.json({ available: true, deliveryDate: null });
    } else {
        return res.json({ available: false, deliveryDate: item.deliveryDate });
    }
}); // extended as needed for delivery dates

app.listen(port, () => console.log(`Server running on port ${port}`));
