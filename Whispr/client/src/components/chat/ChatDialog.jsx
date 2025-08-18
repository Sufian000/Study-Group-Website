import { useContext } from "react";
import { Dialog, Box, styled, useTheme } from "@mui/material";
import { AccountContext } from "../../context/AccountProvider.jsx";

// components
import Menu from "./menu/Menu.jsx";
import EmptyChat from "./chat/EmptyChat.jsx";
import ChatBox from "./chat/ChatBox.jsx";

// Styled Components
const dialogStyle = {
    height: '96%',
    width: '100%',
    margin: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
    background: 'rgba(106, 106, 106, 0.2)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '10px',
    boxShadow: "0 8px 32px 0 rgba(53, 33, 121, 0.5)",
};

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column', // stack on small screens
    },
}));

const LeftComponent = styled(Box)(({ theme }) => ({
    width: '30%',
    minWidth: '250px',
    textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    color: '#ffffff',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
}));

const RightComponent = styled(Box)(({ theme }) => ({
    flex: 1,
    minWidth: '300px',
    borderLeft: '1px solid rgba(0,0,0,0.14)',
    textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    color: '#ffffff',
    [theme.breakpoints.down('sm')]: {
        borderLeft: 'none',
        borderTop: '1px solid rgba(0,0,0,0.14)',
        width: '100%',
    },
}));

// Component
const ChatDialog = () => {
    const { person } = useContext(AccountContext);

    return (
        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
            maxWidth={'md'}
        >
            <Container>
                <LeftComponent>
                    <Menu />
                </LeftComponent>

                <RightComponent>
                    {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
                </RightComponent>
            </Container>
        </Dialog>
    );
};

export default ChatDialog;
