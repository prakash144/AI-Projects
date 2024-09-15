"use client";

import React, { useState } from "react";

export default function MealForm() {
    const [goal, setGoal] = useState(""); // Tracks the selected goal
    const [dietOptions, setDietOptions] = useState<string[]>([]); // Tracks diet based on goal
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [meals, setMeals] = useState(3);
    const [diet, setDiet] = useState("");
    const [allergies, setAllergies] = useState("");

    // Update the diet options based on the selected goal
    const handleGoalChange = (selectedGoal: string) => {
        setGoal(selectedGoal);
        switch (selectedGoal) {
            case "Lose Weight":
                setDietOptions([
                    "Ketogenic (Keto) Diet",
                    "Low Carb Diet",
                    "Paleo Diet",
                ]);
                break;
            case "Gain Muscle":
                setDietOptions([
                    "High Protein Diet",
                    "Low Carb Diet",
                    "Mediterranean Diet",
                ]);
                break;
            case "To be Healthy":
                setDietOptions([
                    "Mediterranean Diet",
                    "Vegetarian Diet",
                    "Gluten-Free Diet",
                    "Paleo Diet",
                    "Anti-Inflammatory Diet",
                ]);
                break;
            default:
                setDietOptions([]);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-5 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-lg w-full">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Create Your Diet Plan</h2>

                {/* Age Dropdown */}
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">Age</label>
                    <select
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                    >
                        <option value="">Select Age</option>
                        {Array.from({ length: 100 }, (_, i) => (
                            <option key={i} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Gender Dropdown */}
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">Gender</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Number of Meals Dropdown */}
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">Number of Meals</label>
                    <select
                        value={meals}
                        onChange={(e) => setMeals(parseInt(e.target.value))}
                        className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                    >
                        <option value={3}>3 Meals</option>
                        <option value={4}>4 Meals</option>
                        <option value={5}>5 Meals</option>
                    </select>
                </div>

                {/* Goal Dropdown */}
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">Goal</label>
                    <select
                        value={goal}
                        onChange={(e) => handleGoalChange(e.target.value)}
                        className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                    >
                        <option value="">Select Goal</option>
                        <option value="Lose Weight">Lose Weight</option>
                        <option value="To be Healthy">To be Healthy</option>
                        <option value="Gain Muscle">Gain Muscle</option>
                    </select>
                </div>

                {/* Diet Dropdown (based on Goal selection) */}
                {goal && (
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">Diet</label>
                        <select
                            value={diet}
                            onChange={(e) => setDiet(e.target.value)}
                            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                        >
                            <option value="">Select Diet</option>
                            {dietOptions.map((dietOption) => (
                                <option key={dietOption} value={dietOption}>
                                    {dietOption}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Food Allergies Textbox */}
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 mb-2">Food Allergies (if any)</label>
                    <input
                        type="text"
                        value={allergies}
                        onChange={(e) => setAllergies(e.target.value)}
                        placeholder="List your allergies"
                        className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                    />
                </div>

                <button className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                    Submit
                </button>
            </div>
        </div>
    );
}
