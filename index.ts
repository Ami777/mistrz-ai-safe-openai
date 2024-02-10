import OpenAI from "openai";
import {API_KEY} from "./config";

(async () => {

    const client = new OpenAI({
        apiKey: API_KEY,
    });

    const userInput = 'Bardzo lubię kurs mistrz.ai!';

    const res = await client.chat.completions.create({
        model: 'gpt-4-1106-preview',
        max_tokens: 10,
        messages: [
            {
                role: 'system',
                content: 'Oceniasz zawsze sentyment tekstu, pisząc jedynie "pozytywny", "neutralny" lub "negatywny".',
            },
            {
                role: 'user',
                content: `Oceń sentyment poniższego tekstu:

\`\`\`
${userInput.substring(0, 1000)}
\`\`\`
`,
            },
        ],
    });

    console.log(res.choices[0].message.content);

    console.log(res.usage.prompt_tokens, res.usage.completion_tokens);

})();