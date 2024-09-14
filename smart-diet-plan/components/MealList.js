// components/MealList.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MealList = ({ meals }) => {
    return (
        <div>
            {meals.map((meal, index) => (
                <Card key={index} style={{ margin: '16px 0' }}>
                    <CardContent>
                        <Typography variant="h5">Meal {index + 1}</Typography>
                        <Typography>Total Calories: {meal.totalCalories}</Typography>
                        <Typography>Food Name: {meal.foodName} (15g): 120 calories kcal</Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default MealList;
