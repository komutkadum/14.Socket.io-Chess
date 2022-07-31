import './style.css'
import { useState } from 'react';
import MainInput from './MainInput';
import Userlist from './Userlist';

function App({socket}) {
  const [user, setUser] = useState(false);
  const [username, setUsername] = useState("")
  return (
    <>
      {user?
      <Userlist socket={socket} username={username}/>:
      <MainInput setUser={setUser}
      setUsername={setUsername} 
      username={username}
      socket={socket}/>}
    </>
  );
}

export default App;
