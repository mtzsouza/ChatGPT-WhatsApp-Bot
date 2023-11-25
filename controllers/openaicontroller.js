const openai = require('../config/openaiConfig');
const data = require('../prompts.json');

const generateMeta = async(prompt) => {
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": data.Max25 + prompt}],
        max_tokens: 50,
      });
    
    return chatCompletion.choices[0].message.content;
}

module.exports = { generateMeta }
