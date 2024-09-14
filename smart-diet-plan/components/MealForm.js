// components/MealForm.js
import React, { useState } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select } from '@mui/material';

const MealForm = ({ onMealAdded }) => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [numMeals, setNumMeals] = useState('');
    const [goal, setGoal] = useState('');
    const [diet, setDiet] = useState('');
    const [allergies, setAllergies] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Prepare meal data (you can customize this)
        const mealData = { age, gender, numMeals, goal, diet, allergies };
        onMealAdded(mealData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="normal">
                <InputLabel>Age</InputLabel>
                <Select value={age} onChange={(e) => setAge(e.target.value)} required>
                    {/* Populate options as needed */}
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <InputLabel>Gender</InputLabel>
                <Select value={gender} onChange={(e) => setGender(e.target.value)} required>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <InputLabel>Number of Meals</InputLabel>
                <Select value={numMeals} onChange={(e) => setNumMeals(e.target.value)} required>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <InputLabel>Goal</InputLabel>
                <Select value={goal} onChange={(e) => setGoal(e.target.value)} required>
                    <MenuItem value="loseWeight">Lose Weight</MenuItem>
                    <MenuItem value="beHealthy">To be Healthy</MenuItem>
                    <MenuItem value="gainMuscle">Gain Muscle</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
                <InputLabel>Diet</InputLabel>
                <Select value={diet} onChange={(e) => setDiet(e.target.value)} required>
                    <MenuItem value="vegetarian">Vegetarian Diet</MenuItem>
                    <MenuItem value="mediterranean">Mediterranean Diet</MenuItem>
                    <MenuItem value="keto">Ketogenic Diet</MenuItem>
                    <MenuItem value="paleo">Paleo</MenuItem>
                    <MenuItem value="glutenFree">Gluten Free</MenuItem>
                    <MenuItem value="lowCarb">Low Carb Diet</MenuItem>
                </Select>
            </FormControl>

            <TextField
                label="Food Allergies (if any)"
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
                fullWidth
                margin="normal"
            />

            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
};

export default MealForm;
