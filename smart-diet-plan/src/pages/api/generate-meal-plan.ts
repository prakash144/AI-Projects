import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const API_URL = 'https://api-inference.huggingface.co/models/gpt2'; // Replace with appropriate model URL
const API_KEY = process.env.HUGGINGFACE_API_KEY; // Ensure you set your Hugging Face API key in environment variables

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { age, gender, numberOfMeals, goal, diet, allergies } = req.body;

        try {
            // Use Hugging Face API to generate a meal plan
            const response = await axios.post(
                API_URL,
                {
                    inputs: `Generate a meal plan for a ${age} year old ${gender} who wants to ${goal}. Diet preference: ${diet}. Allergies: ${allergies}. Number of meals: ${numberOfMeals}.`,
                    parameters: {
                        max_length: 150, // Adjust based on the length of the response you want
                        num_return_sequences: 1
                    },
                },
                {
                    headers: {
                        Authorization: `Bearer ${API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(response);
            // Return the generated meal plans to the client
            res.status(200).json({ mealPlans: response.data[0].generated_text });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                res.status(error.response?.status || 500).json({ error: error.response?.data?.error || error.message });
            } else {
                res.status(500).json({ error: 'Failed to generate meal plan' });
            }
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
