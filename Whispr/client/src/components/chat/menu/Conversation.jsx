import { useContext, useEffect, useState } from "react";

import { Box, Typography, styled } from "@mui/material";



import { AccountContext } from "../../../context/AccountProvider";
import { setConversation, getConversation } from "../../../service/api";
import { formatDate } from "../../../utils/common-utils";


const Component = styled(Box)`
    display: flex;
    height: 50px;
    padding: 13px 0;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.15); 
    backdropFilter: blur(5px);             
    WebkitBackdropFilter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    borderRadius: 10px;
    
    boxShadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

const Image = styled('img')({
    width: 50,
    height: 50,
    borderRadius: '50%',
    padding: '0 14px'
})

const UserName = styled(Typography)`
    padding: 6px 0;
`

const Containeer = styled(Box)`
    display: flex;
    width: 100%;
    flex-direction: column
    
    
`

const InfoRow = styled(Box)`
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
`
const TimeStamp =styled(Typography)`
    font-size: 12px;
    flex-shrink: 0;
    
   
    
`
const Logo =styled(Typography)`
    font-size: 10px;
    display:flex;
    align-items:center;
    flex-shrink: 0;

    
    
`

const Conversation = ({ user }) => {

    const { setPerson, account } = useContext(AccountContext);

    const [message, setMessage] = useState({});

    useEffect(() => {
        const getConversationDetails = async () => {
            const data = await getConversation({senderId: account.sub, receiverId: user.sub});
            setMessage({text: data?.message, timestamp:data?.updatedAt})
        }
        getConversationDetails();
    }, [])

    const getUsers =  async () => {
        setPerson(user);
        await setConversation({senderId: account.sub, receiverId: user.sub })

    }

    return(
        <Component onClick={() => getUsers()}>
            <Box>
                <Image src={user.picture} alt="user-picture" />
            </Box>
            <Box styled ={{width: '100%'}}>
                <Containeer>
                    <UserName>{user.name}</UserName>
                    
                </Containeer>
                <InfoRow>
                    {
                        message?.text && 
                        <TimeStamp>{formatDate(message?.timestamp)}</TimeStamp>
                    }
                    <Logo>💬</Logo>
                </InfoRow>
            </Box>
        </Component>
    )
}

export default Conversation;