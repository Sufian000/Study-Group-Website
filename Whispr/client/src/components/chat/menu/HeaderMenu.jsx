import { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem, styled } from "@mui/material";

const MenuOption = styled(MenuItem)`
    background: rgba(205, 205, 205, 0.15); 
    backdropFilter: blur(5px);             
    WebkitBackdropFilter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #ffffffff;

`
const MenuStyle = styled(Menu) `
    background: rgba(205, 205, 205, 0.15); 
    backdropFilter: blur(5px);             
    WebkitBackdropFilter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    
`

const HeaderMenu = ({ setOpenDrawer }) => {

    const [open, setOpen] = useState(null);

    const handleClose = () => {
        setOpen(null);
    }

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }
    return (
        <>
            <MoreVert onClick={handleClick} />
            

            <MenuStyle
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorEl={null}
                MenuListProps={{"aria-labelledby":"basic-button"}}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                transformOrigin={{vertical:'top', horizontal:'right'}}
                PaperProps={{
                                sx: {
                                    background: 'rgba(205, 205, 205, 0.15)',
                                    backdropFilter: 'blur(5px)',
                                    WebkitBackdropFilter: 'blur(5px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                    color: '#fff'
                                }
    }}
            >
                <MenuOption onClick={() => { handleClose(); setOpenDrawer(true); }}>Profile</MenuOption>
                <MenuOption onClick={handleClose}>My account</MenuOption>
                <MenuOption onClick={handleClose}>Logout</MenuOption>
            </MenuStyle>
        </>
    )
}

export default HeaderMenu;