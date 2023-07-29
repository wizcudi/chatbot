// api.js
require("dotenv").config();

const {Configuration, OpenAIApi} = require("openai");

const configuration = new Configuration({
  organization: process.env.ORGANIZATION,
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

const handleChatRequest = async (req, res) => {
  const userMessage = req.body.message; // Extract the user's message from the request body
  try {
    const completion = await openai.createChatCompletion({
      model: process.env.CURRENT_MODEL,
      messages: [
        {"role": "system", "content": "You are a helpful assistant."}, 
        {role: "user", content: userMessage} // Use the user's message here
      ],
    });
    const botMessage = completion.data.choices[0].message.content;
    res.json({ message: botMessage }); // Send the bot's message back to the frontend
  } catch (error) {
    console.error('Error creating chat completion:', error);
    res.status(500).json({ error: 'Error creating chat completion' });
  }
};

module.exports = { handleChatRequest };
