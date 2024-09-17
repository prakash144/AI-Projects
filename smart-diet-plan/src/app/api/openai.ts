export async function generateMealPlan(params: {
    age: string;
    gender: string;
    numberOfMeals: number;
    goal: string;
    diet: string;
    allergies: string;
}) {
    // POST request to your Next.js API route
    const response = await fetch("/api/generate-meal-plan", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
    });
    // Error handling
    if (!response.ok) {
        throw new Error("Network response was not ok.");
    }
    // Expecting a JSON response with meal plans
    const data = await response.json();
    return data.mealPlans;
}
