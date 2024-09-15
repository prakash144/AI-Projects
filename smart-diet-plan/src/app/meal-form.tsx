// src/app/meal-form.tsx
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import { ArrowLeft } from "lucide-react";

type Goal = "Lose Weight" | "To be Healthy" | "Gain Muscle";
type DietOption = "Mediterranean Diet" | "Ketogenic (Keto) Diet" | "Paleo" | "Vegetarian Diet" | "Gluten-Free Diet" | "Low Carb Diet";

const goals: Goal[] = [
    "Lose Weight",
    "To be Healthy",
    "Gain Muscle",
];

const dietOptions: DietOption[] = [
    "Mediterranean Diet",
    "Ketogenic (Keto) Diet",
    "Paleo",
    "Vegetarian Diet",
    "Gluten-Free Diet",
    "Low Carb Diet",
];

const MealForm: React.FC = () => {
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [numberOfMeals, setNumberOfMeals] = useState("");
    const [goal, setGoal] = useState<Goal | "">("");
    const [diet, setDiet] = useState<DietOption | "">("");
    const [allergies, setAllergies] = useState("");
    const router = useRouter(); // Initialize useRouter

    const handleReset = () => {
        setAge("");
        setGender("");
        setNumberOfMeals("");
        setGoal("");
        setDiet("");
        setAllergies("");
    };

    const handleBackToHome = () => {
        router.push("/"); // Navigate to the home page
    };

    return (
        <div className="p-6 max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700">
            <form className="space-y-6">
                {/* Age */}
                <label className="block">
                    <span className="text-gray-800 dark:text-gray-300 text-lg">Age</span>
                    <select
                        className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200 text-lg py-3 px-4"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    >
                        <option value="">Select Age</option>
                        <option value="18-25">18-25</option>
                        <option value="26-35">26-35</option>
                        <option value="36-45">36-45</option>
                        <option value="46-60">46-60</option>
                        <option value="60+">60+</option>
                    </select>
                </label>

                {/* Gender */}
                <label className="block">
                    <span className="text-gray-800 dark:text-gray-300 text-lg">Gender</span>
                    <select
                        className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200 text-lg py-3 px-4"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </label>

                {/* Number of Meals */}
                <label className="block">
                    <span className="text-gray-800 dark:text-gray-300 text-lg">Number of Meals</span>
                    <select
                        className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200 text-lg py-3 px-4"
                        value={numberOfMeals}
                        onChange={(e) => setNumberOfMeals(e.target.value)}
                    >
                        <option value="">Select Number of Meals</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5+">5+</option>
                    </select>
                </label>

                {/* Goal */}
                <label className="block">
                    <span className="text-gray-800 dark:text-gray-300 text-lg">Goal</span>
                    <select
                        className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200 text-lg py-3 px-4"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value as Goal)}
                    >
                        <option value="">Select Goal</option>
                        {goals.map((goalOption) => (
                            <option key={goalOption} value={goalOption}>
                                {goalOption}
                            </option>
                        ))}
                    </select>
                </label>

                {/* Diet */}
                {goal && (
                    <label className="block">
                        <span className="text-gray-800 dark:text-gray-300 text-lg">Diet</span>
                        <select
                            className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200 text-lg py-3 px-4"
                            value={diet}
                            onChange={(e) => setDiet(e.target.value as DietOption)}
                        >
                            <option value="">Select Diet</option>
                            {dietOptions.map((dietOption) => (
                                <option key={dietOption} value={dietOption}>
                                    {dietOption}
                                </option>
                            ))}
                        </select>
                    </label>
                )}

                {/* Allergies */}
                <label className="block">
                    <span className="text-gray-800 dark:text-gray-300 text-lg">Food Allergies (if any)</span>
                    <textarea
                        className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200 text-lg py-3 px-4"
                        rows={3}
                        value={allergies}
                        onChange={(e) => setAllergies(e.target.value)}
                    />
                </label>

                <div className="flex flex-col items-center space-y-4">
                    <div className="flex space-x-4">
                        <button
                            type="button"
                            onClick={handleReset}
                            className="px-6 py-3 bg-gray-400 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-300 transition"
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-green-300 transition"
                        >
                            Generate
                        </button>
                    </div>
                    <button
                        type="button"
                        onClick={handleBackToHome}
                        className="flex items-center text-blue-500 hover:underline focus:outline-none dark:text-blue-300"
                    >
                        <ArrowLeft className="mr-2" />
                        Back to Home
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MealForm;
