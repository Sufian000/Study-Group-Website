import { useContext, useEffect, useState } from "react";
import { Box, styled } from "@mui/material";

import { AccountContext } from "../../../context/AccountProvider";
import { getConversation } from '../../../service/api';

// Components
import ChatHeader from "./ChatHeader";
import Messages from './Messages';

// Styled Containers
const Container = styled(Box)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
}));

const HeaderContainer = styled(Box)(({ theme }) => ({
    flex: '0 0 auto',
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
    },
}));

const MessagesContainer = styled(Box)(({ theme }) => ({
    flex: '1 1 auto',
    overflowY: 'auto',
    height: 0, // allows flex to control it
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
    },
}));

// Component
const ChatBox = () => {
    const { person } = useContext(AccountContext);

    const { account } = useContext(AccountContext);

    const [conversation, setConversation] = useState({});
    

    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
            setConversation(data);
        }
        getConversationDetails();
    }, [person.sub]);

    return (
        <Container>
            <HeaderContainer>
                <ChatHeader person={person} />
            </HeaderContainer>

            <MessagesContainer>
                <Messages person={person} conversation={conversation} />
            </MessagesContainer>
        </Container>
    );
};

export default ChatBox;
