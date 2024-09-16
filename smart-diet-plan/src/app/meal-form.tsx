// src/app/meal-form.tsx
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Card from "./meal-card";

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

const generateMealCards = (numberOfMeals: number) => {
    // Example meal data, you can customize it
    const exampleMeals = [
        { name: "Rice", quantity: "1 bowl or 50g", calories: "120 kcal" },
        { name: "Roti", quantity: "2 pieces", calories: "120 kcal" },
        { name: "Paneer", quantity: "30 gm", calories: "100 kcal" }
    ];

    return Array.from({ length: numberOfMeals }, (_, i) => ({
        title: `Meal ${i + 1}`,
        items: exampleMeals,
        totalCalories: "340 kcal"  // Example total calories
    }));
};

const MealForm: React.FC = () => {
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [numberOfMeals, setNumberOfMeals] = useState("");
    const [goal, setGoal] = useState<Goal | "">("");
    const [diet, setDiet] = useState<DietOption | "">("");
    const [allergies, setAllergies] = useState("");
    const [mealCards, setMealCards] = useState<any[]>([]);
    const router = useRouter();

    const handleReset = () => {
        setAge("");
        setGender("");
        setNumberOfMeals("");
        setGoal("");
        setDiet("");
        setAllergies("");
        setMealCards([]);
    };

    const handleGenerate = () => {
        if (numberOfMeals) {
            setMealCards(generateMealCards(Number(numberOfMeals)));
        }
    };

    const handleBackToHome = () => {
        router.push("/");
    };

    return (
        <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="flex flex-col md:flex-row md:space-x-8">
                {/* Meal Form */}
                <div className="flex-1 max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 p-6">
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
                                <option value="5">5</option>
                                <option value="6">6</option>
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

                        <div className="flex flex-col gap-4">
                            <button
                                type="button"
                                className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                onClick={handleGenerate}
                            >
                                Generate
                            </button>
                            <button
                                type="button"
                                className="py-2 px-4 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                                onClick={handleReset}
                            >
                                Reset
                            </button>
                            <button
                                type="button"
                                className="flex items-center text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
                                onClick={handleBackToHome}
                            >
                                <ArrowLeft className="mr-2" />
                                Back to Home
                            </button>
                        </div>
                    </form>
                </div>

                {/* Meal Cards */}
                <div className="flex-1 mt-6 md:mt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mealCards.map((card, index) => (
                            <Card
                                key={index}
                                title={card.title}
                                items={card.items}
                                totalCalories={card.totalCalories}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealForm;
