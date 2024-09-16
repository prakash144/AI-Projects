// src/app/card.tsx
import React from "react";

interface CardProps {
    title: string;
    items: { name: string; quantity: string; calories: string }[];
    totalCalories: string;
}

const Card: React.FC<CardProps> = ({ title, items, totalCalories }) => {
    return (
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">{title}</h2>
            <div className="space-y-3">
                {items.map((item, index) => (
                    <div key={index} className="flex justify-between text-gray-700 dark:text-gray-300">
                        <span>{item.name} ({item.quantity})</span>
                        <span>{item.calories}</span>
                    </div>
                ))}
            </div>
            <div className="mt-4 border-t border-gray-300 dark:border-gray-600 pt-2">
                <div className="flex justify-between font-semibold text-lg text-gray-800 dark:text-gray-100">
                    <span>Total Calories</span>
                    <span>{totalCalories}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
