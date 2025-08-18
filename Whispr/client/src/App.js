import { GoogleOAuthProvider } from '@react-oauth/google';

//components
import Messenger from "./components/Messenger.jsx"
import AccountProvider from './context/AccountProvider.jsx';

function App() {

  const clientId = '49958654686-9ccc126no8ondutgp434ob95lkp607v9.apps.googleusercontent.com'

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
