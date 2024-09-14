// pages/index.js
import React, { useState } from 'react';
import { Button, Typography, Container, IconButton } from '@mui/material';
import { useTheme } from '../components/ThemeProvider';
import MealForm from '../components/MealForm';
import MealList from '../components/MealList';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const Home = () => {
    const [meals, setMeals] = useState([]);
    const [showMealForm, setShowMealForm] = useState(false);
    const { mode, toggleTheme } = useTheme(); // Get the current theme mode

    const handleMealAdded = (meal) => {
        setMeals([...meals, { totalCalories: meal.totalCalories || 0, foodName: meal.foodName || 'Unknown', calories: meal.calories || 0 }]);
    };

    return (
        <Container className={mode === 'dark' ? 'dark-mode' : 'light-mode'}>
            <IconButton onClick={toggleTheme} aria-label="Toggle dark mode" style={{ position: 'absolute', top: 16, right: 16 }}>
                {mode === 'dark' ? <Brightness7 /> : <Brightness4 />} {/* Toggle icon */}
            </IconButton>
            {!showMealForm ? (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <Typography variant="h2" gutterBottom>
                        Your Personal Trainer & Nutritionist
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Transfer your eating habits
                    </Typography>
                    <Button variant="contained" color="primary" onClick={() => setShowMealForm(true)}>
                        Create Your Diet Plan Now
                    </Button>
                </div>
            ) : (
                <div>
                    <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginTop: '20px' }}>
                        Create Your Smart Diet Plan
                    </Typography>
                    <MealForm onMealAdded={handleMealAdded} />
                    <MealList meals={meals} />
                    <Button variant="outlined" onClick={() => setShowMealForm(false)} style={{ marginTop: '20px' }}>
                        Back to Main
                    </Button>
                </div>
            )}
        </Container>
    );
};

export default Home;
