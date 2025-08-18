import { useContext } from 'react';

import { AppBar, Box, Toolbar, styled} from '@mui/material';

import { AccountContext } from '../context/AccountProvider';

//components
import LoginDialog from "./account/LoginDialog";
import ChatDialog from './chat/ChatDialog';

const Component = styled(Box)`
    height: 100vh;
    width: 100%;


    background: #c31432;


    background: -webkit-linear-gradient(to right, #240b36, #c31432);


    background: linear-gradient(to right, #240b36, #c31432);


    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    image-rendering: optimizeQuality;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0);

    

    
  );





`

const ChatHeader = styled(AppBar)`
    height: 125px;
    box-shadow: none;
`

 const LoginHeader = styled(AppBar)`
    height: 220px;
    box-shadow: none;
`


const Messenger = () => {

    const { account } = useContext(AccountContext);

    return(
        <Component>
            
            {
                
                account ? 
                <>
                    
                        <Toolbar>

                        </Toolbar>
                    
                    <ChatDialog />
                    
                </>
                :
                <>
                    
                        <Toolbar>
                        </Toolbar>
                    
                    <LoginDialog />
                </>
            }
        </Component>
    )
}

export default Messenger;