import { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { Search, MoreVert } from '@mui/icons-material';

import { AccountContext } from "../../../context/AccountProvider";

// Main container with responsive flex
const Container = styled(Box)(({ theme }) => ({
    background: 'rgba(109, 108, 108, 0.15)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
    height:'50px',
    width: '98%',
    flexWrap: 'wrap',
    gap: '12px',

    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '12px',
    },
}));

const Image = styled('img')(({ theme }) => ({
    height: 40,
    width: 40,
    objectFit: 'cover',
    borderRadius: '50%',
    [theme.breakpoints.down('sm')]: {
        height: 32,
        width: 32,
    }
}));

const Name = styled(Typography)(({ theme }) => ({
    marginLeft: 12,
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        fontSize: '0.95rem',
    }
}));

const Status = styled(Typography)(({ theme }) => ({
    marginLeft: 12,
    fontSize: 12,
    color: '#ddd',
    [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        fontSize: '0.8rem',
    }
}));

const RightContainer = styled(Box)(({ theme }) => ({
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',

    '& > svg': {
        padding: 8,
        fontSize: 22,
    },

    [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        marginTop: 8,
        width: '100%',
        justifyContent: 'flex-end',
    }
}));

// Main component
const ChatHeader = ({ person }) => {

    const { activeUsers } = useContext(AccountContext);

    return (
        <Container>
            <Image src={person.picture} alt="dp" />
            <Box>
                <Name>{person.name}</Name>
                <Status>{activeUsers?.find(user => user.sub === person.sub) ? '🟢 Online' : '🔴 Offline'}</Status>
            </Box>
            <RightContainer>
                <Search />
                <MoreVert />
            </RightContainer>
        </Container>
    );
};

export default ChatHeader;
