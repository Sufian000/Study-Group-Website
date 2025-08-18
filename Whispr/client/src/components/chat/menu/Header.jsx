import { useContext, useState } from "react";

import { Box, styled} from '@mui/material';
import { Chat as MessageIcon, MoreVert } from '@mui/icons-material';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';


import { AccountContext } from "../../../context/AccountProvider";

//components
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Component = styled(Box)`
    height: 50px;
    background: rgba(205, 205, 205, 0.15); 
    backdropFilter: blur(5px);             
    WebkitBackdropFilter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    borderRadius: 10px;
    padding: 8px 16px;
    boxShadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    color: #fff;
    display: flex;
    align-items: center;
`

const Wrapper = styled(Box)`
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 10px; 
        font-size: 24px;
    }
`  
    

const Image = styled('img')({
    height: 45,
    width: 45,
    borderRadius: '50%'


})

const Header = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const { account } = useContext(AccountContext);

    const toggleDrawer = () => {
        setOpenDrawer(true);
    }

    return (
        <>
            <Component>
                <Image src={account.picture} alt="profile-picture" onClick={() => toggleDrawer()} />
                <Wrapper>
                    <HistoryToggleOffIcon />
                    <MessageIcon />
                    <HeaderMenu setOpenDrawer={setOpenDrawer} />
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen = {setOpenDrawer} />

        </>
    )
}

export default Header;