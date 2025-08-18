import { useContext } from "react";

import { Typography, Box, styled } from "@mui/material";

import { AccountContext } from "../../context/AccountProvider";

const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;

`
const Image = styled('img')({
    width: 200,
    height: 200,
    borderRadius: '50%',
    padding: '25px 0' 

})

const BoxWrapper = styled(Box)  `
    background: rgba(205, 205, 205, 0.2);
    backdropFilter: blur(10px);
    WebkitBackdropFilter: 'blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    borderRadius: 10px;
    boxShadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    color: #ffffff;
    padding: 14px 32px 4px;
    & :first-child {
        font-size: 15px;
        color: rgba(210,210,210)}
    & :last-child {
        margin: 12px 0;
        
    }

`

const DescriptionContainer = styled(Box)`
    color: rgba(210,210,210);
    padding: 15px 20px 28px 30px;
    & > p{
        font-size: 13px;
    }
`
const AboutContainer = styled(Box)`
    color: rgba(255,255,255);
    background: rgba(205, 205, 205, 0.2);
    backdropFilter: blur(10px);
    WebkitBackdropFilter: 'blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    borderRadius: 10px;
    boxShadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    padding: 14px 32px 4px;
    & :first-child {
        font-size: 15px;
        color: rgba(210,210,210)}
    & :last-child {
        margin: 12px 0;
        
    }


`

const Profile = () => {

    const { account } = useContext(AccountContext);

    return (
        <>
        <ImageContainer>
            <Image src={account.picture} alt="profile-picture" />
        </ImageContainer>
        <BoxWrapper>
            <Typography>Your name</Typography>
            <Typography>{account.name}</Typography>
        </BoxWrapper>
        <DescriptionContainer>
            <Typography>Your Whispr Name. Visible to your Contacts.</Typography>
        </DescriptionContainer>
        <AboutContainer>
            <Typography>About</Typography>
            <Typography>Dream Big! Achieve Big!</Typography>
        </AboutContainer>
        </>
    )
}

export default Profile;