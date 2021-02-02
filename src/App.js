import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from './component/ChatFeed';
import LoginForm from "./component/LoginForm";

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <ChatEngine
      height="100vh"
      projectID="7b4166da-8f60-4c5d-924f-7a0c6fe9ffc7"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}  />}
    />
  );
};


export default App;