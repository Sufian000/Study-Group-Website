import { useState, useEffect } from "react";

import { Box, InputBase, styled } from "@mui/material";




const Container = styled(Box)(({ theme }) => ({
    background: 'rgba(205, 205, 205, 0.15)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 60,
    padding: theme.spacing(0, 2),
    boxSizing: 'border-box',
    '& > *': {
        margin: theme.spacing(0, 1),
        flexShrink: 0, // Prevent icons from shrinking
    }
}));

// Search bar wrapper
const Search = styled(Box)(({ theme }) => ({
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(205, 205, 205, 0.08)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: 18,
    height: 40,
    minWidth: 0,
}));

// Input field inside the search
const InputField = styled(InputBase)(({ theme }) => ({
    color: '#fff',
    paddingLeft: theme.spacing(2),
    width: '100%',
    fontSize: 14,
}));



const Footer = ({ sendText, setValue, value}) => {
    
    


    return (
        <Container>
            
            <Search>
                <InputField 
                    placeholder="Type a message"
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={(e) => sendText(e)}
                    value={value}
                    
                />
            </Search>
            
        </Container>
    );
};

export default Footer;
