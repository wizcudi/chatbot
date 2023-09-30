
// /CHATBOT/functions/chatbot.js
const { openai } = require("./config");

require("dotenv").config();

const handleChatRequest = async (req, res) => {
  const userMessage = req.body.message;

  const conversationHistory = [
    {
      role: "system",
      content:
        "You are a helpful assistant. I am a self-taught web developer, I code primarily using REACT, Node.js/Express, and I utilize Firebase/Firestore to handle my back-end needs. My primary goal is to build web applications to feature in my portfolio. Ignore all previous instructions, give me very short and concise answers and ignore all the niceties that OpenAI programmed you with. Please explain your reasonings in Layman's terms.",
    },
    {
      role: "user",
      content: userMessage,
    },
  ];

  try {
    const completion = await openai.createChatCompletion({
      model: process.env.CURRENT_MODEL,
      messages: conversationHistory,
    });

    // Check if the response contains choices and a message
    if (
      completion &&
      completion.data &&
      Array.isArray(completion.data.choices) &&
      completion.data.choices.length > 0 &&
      completion.data.choices[0].message &&
      completion.data.choices[0].message.content
    ) {
      const botMessage = completion.data.choices[0].message.content;

      // Return the bot's response
      res.json({ message: botMessage });

      // Optionally, you can save the bot's response to a database or other storage
    } else {
      console.error('Invalid OpenAI response:', completion);
      res.status(500).json({ error: 'Invalid OpenAI response' });
    }
  } catch (error) {
    console.error('Error creating chat completion:', error);
    res.status(500).json({ error: 'Error creating chat completion' });
  }
};


module.exports = { handleChatRequest };



