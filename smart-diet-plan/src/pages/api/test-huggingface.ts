// src/pages/api/test-huggingface.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// Define the Hugging Face API URL and your API key
const API_URL = 'https://api-inference.huggingface.co/models/gpt2';
const API_KEY = process.env.HUGGINGFACE_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const response = await axios.post(
                API_URL,
                {
                    inputs: 'Generate a short meal plan for a vegetarian.',
                    parameters: {
                        max_length: 50,
                    },
                },
                {
                    headers: {
                        Authorization: `Bearer ${API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            res.status(200).json({ text: response.data[0].generated_text });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                res.status(error.response?.status || 500).json({ error: error.response?.data?.error || error.message });
            } else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
