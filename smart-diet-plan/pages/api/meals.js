// pages/api/meals.js
let meals = []; // In-memory storage for demonstration

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(meals);
    } else if (req.method === 'POST') {
        const newMeal = req.body;
        meals.push(newMeal);
        res.status(201).json(newMeal);
    }
}
