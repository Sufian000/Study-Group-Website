
import { Box, styled, Typography } from "@mui/material";
import logo from '../../../constants/Innovative Whispr Logo with Lightning Bolt Icon.png';

const Container = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: theme.spacing(2),
  overflow: 'hidden',

  background: '#c31432',

  backgroundImage: 'linear-gradient(to right, #240b36, #c31432)',

  WebkitBackgroundImage: 'linear-gradient(to right, #240b36, #c31432)',

  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',

  imageRendering: 'optimizeQuality',
  WebkitBackfaceVisibility: 'hidden',
  WebkitTransform: 'translateZ(0)',
}));

const Image = styled('img')(({ theme }) => ({
  width: '80%',
  maxWidth: '400px',
  height: 'auto',
  marginBottom: theme.spacing(3),
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    maxWidth: '300px',
    marginBottom: theme.spacing(2),
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 300,
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 400,
  maxWidth: '600px',
  padding: `0 ${theme.spacing(2)}px`,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const EmptyChat = () => {
  return (
    <Container>
      <Image src={logo} alt="whispr-logo" />
      <Title>Whispr Chat</Title>
      <SubTitle>Say it. Send it. At the speed of thought.</SubTitle>
    </Container>
  );
};

export default EmptyChat;
