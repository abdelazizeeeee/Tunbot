import { useState } from "react";
import "./App.css";
import { ChatBotWidget } from "chatbot-widget-ui";

function App() {
  const [messages, setMessages] = useState<string[]>([]);

  const customApiCall = async (message: string): Promise<string> => {
    const response = await fetch(
      "https://daea-196-203-25-82.ngrok-free.app/api/bot/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: message }),
      }
    );
    const data = await response.json();
    console.log(data);
    
    return data.response;
  };
  return (
    <div>
      <ChatBotWidget
        callApi={customApiCall}
        primaryColor="#3498db"
        inputMsgPlaceholder="Type your message..."
        chatbotName="Softy TunisianBot"
        isTypingMessage="Typing..."
        IncommingErrMsg="Oops! Something went wrong. Try again."
        handleNewMessage={setMessages}
        chatIcon={<div>O</div>}
      />
    </div>
  );
}

export default App;
