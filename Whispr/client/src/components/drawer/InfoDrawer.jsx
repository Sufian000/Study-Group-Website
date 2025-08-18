
import { ArrowBack } from '@mui/icons-material';
import { Drawer, Typography, Box, styled } from '@mui/material';

//componetns
import Profile from './Profile';

const Header = styled(Box) `
    background: rgba(205, 205, 205, 0.2);
    backdropFilter: blur(10px);
    WebkitBackdropFilter: 'blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    borderRadius: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    boxShadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    height: 110px;
    color: #ffffff;
    display: flex;
    & > svg, & > p{
        margin-top: auto;
        padding: 12px;
        font-weight: 600;
    }
`

const Component = styled(Box) `
    height: 85%;


`

const drawerStyle = {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',  // camelCase for React inline style
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    left: 20,
    top: 20,
    height: '96%',
    minWidth: '450px'
}


const InfoDrawer = ( {open, setOpen}) => {

    const handleClose = () => (
        setOpen(false)
    )
    return (
        <Drawer
            open = {open}
            onClose={handleClose}
            PaperProps={{sx: drawerStyle }}
            style={{zIndex: 1500}}
        >
            <Header>
                <ArrowBack onClick ={() => setOpen(false)}/>
                <Typography>Profile</Typography>
            </Header>
            <Component>
                <Profile />
            </Component>

        </Drawer>
        
    )
}

export default InfoDrawer;