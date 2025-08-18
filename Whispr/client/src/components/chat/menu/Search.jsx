


import { Search as SearchIcon } from "@mui/icons-material";

import { InputBase, Box, styled } from '@mui/material';

const Component = styled(Box)`
    background: rgba(205, 205, 205, 0.15); 
    backdropFilter: blur(5px);             
    WebkitBackdropFilter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    height:  45px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    
    
`


const Wrapper = styled(Box)`
    background: rgba(195, 195, 195, 0.15); 
    backdropFilter: blur(5px);             
    WebkitBackdropFilter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
    display: flex;
    width: 85%;
    border-radius: 100px;
    margin-right: 8px;

    
    

`

const Icon = styled(Box)`
    margin: 0 0 0 10px;
    display: flex;
    align-items: center;
    margin-right: 8px;
    
`

const InputField = styled(InputBase)`
    width: 100%;
    color: #ffffffff;
    text-shadow:
                0 0 4px #fff,
                0 0 8px #fff,
                0 0 16px #ffffff,
                0 0 24px rgba(255, 255, 255, 0.7),
                0 0 32px rgba(255, 255, 255, 0.5);

    font-weight: 400;
    padding-top: 2px;
    padding-left: 15px;
    
    
`

const Search = ({ setText }) => {

    return (
        <Component>
            <Icon>
                    <SearchIcon 
                        fontSize= "small"    
                    />
            </Icon>
            <Wrapper>
                <InputField 
                    placeholder="Search or start new chat"
                    onChange={(e) => setText(e.target.value)}
                />
            </Wrapper>
        </Component>
    
    )
}

export default Search;