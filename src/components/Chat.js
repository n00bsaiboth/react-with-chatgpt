import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);

  // Function to send a message and get a response from the API
  const sendMessage = async () => {
    if (!input.trim()) return; // Ignore empty inputs

    // Add user message to the chat
    const userMessage = { text: input, user: 'me' }; // Use 'me' for the user
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Clear the input field
    setInput('');

    try {
      // Fetch response from the OpenAI API
      const botMessageText = await fetchMessage(input);
      const botMessage = { text: botMessageText, user: 'you' }; // Use 'you' for the bot
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setError(null); // Clear previous errors
    } catch (err) {
      console.error('Error fetching message:', err);
      setError('Something went wrong. Please try again later.');
    }
  };

  // Function to fetch a message from the OpenAI API
  const fetchMessage = async (input) => {
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: input }],
        max_tokens: 50,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error.message || 'API request failed');
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
  };

  return (
    <div>
      <section id="react-with-chatgpt">
        <div className="container">
          <div className="jumbotron">
              <div className="row">
                <div className="col-12 col-sm-12 col-xs-12">
                  <div className="message-container">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`message ${message.user === 'me' ? 'user-message' : 'bot-message'}`}
                      >
                        <strong>{message.user === 'me' ? 'Me:' : 'ChatGPT:'}</strong> {message.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-12 col-xs-12">
                  {error && <div className="error-message">{error}</div>}
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-12 col-xs-12">
                  {error && <div className="error-message">{error}</div>}
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-12 col-xs-12">
                  <div className="input-container">
                    <input
                      className="form-control"
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      placeholder="Type a message..."
                    />        
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-12 col-xs-12">
                  <div className="submit-container">
                    <button className="btn btn-primary" onClick={sendMessage}>Send</button>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chat;
