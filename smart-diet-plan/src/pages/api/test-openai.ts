import OpenAI from 'openai';

// Initialize OpenAI with your API key
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function testOpenAI() {
    try {
        // Use the chat completion method for gpt-3.5-turbo
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'user', content: 'Hello, OpenAI!' }
            ],
            max_tokens: 5,
        });
        console.log("OpenAI response:", response);
    } catch (error) {
        console.error("Error communicating with OpenAI:", error);
    }
}

testOpenAI();
