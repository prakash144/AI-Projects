import OpenAI from 'openai';

// Initialize OpenAI with your API key
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Make sure your environment variable is set
});

async function fetchCompletion() {
    try {
        // Use the chat completion method for gpt-3.5-turbo
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo', // Updated to a free-tier model
            messages: [
                { role: 'user', content: 'Generate a short meal plan for a vegetarian.' }
            ],
            max_tokens: 50,
        });
        console.log(response.choices[0].message.content);
    } catch (error) {
        if (error instanceof Error) {
            // Handle known error type
            console.error("Error communicating with OpenAI:", error.message);
        } else {
            // Handle unknown error type
            console.error("An unknown error occurred:", error);
        }
    }
}

fetchCompletion();
