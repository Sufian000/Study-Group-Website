import React, { useState, useContext } from "react";
import {
  Dialog,
  Box,
  TextField,
  Button,
  Typography,
  styled,
} from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";
import {jwtDecode} from "jwt-decode";
import logo from '../../constants/Innovative Whispr Logo with Lightning Bolt Icon.png'

const dialogStyle = {
  height: "40vh",
  width: 280,
  maxWidth: "90%",
  padding: 25,
  background: "rgba(134, 134, 134, 0.15)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "15px",
  boxShadow: "0 8px 32px 0 rgba(53, 33, 121, 0.5)",
  color: "#ffffff",
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

const Title = styled(Typography)({
  fontSize: 24,
  fontWeight: 500,
  textAlign: "center",
  color: "#ffffff",
  
});

const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Please enter username and password");
      return;
    }

    // Add your username/password login logic here
    console.log("Login with", username, password);

    setUsername("");
    setPassword("");
  };

  const onLoginSuccess = async (res) => {
    const decoded = jwtDecode(res.credential);
    setAccount(decoded);
    await addUser(decoded);
  };

  const onLoginError = (res) => {
    console.log("Google login failed", res);
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop>
      <Box
        component="form"
        onSubmit={handleUsernameLogin}
        sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: 'center' }}
      >
        <img src={logo} alt="" 
        style={{width: '80px', height: '80px', }}/>
        <Title>User Login</Title>

        {error && (
          <Typography color="error" variant="body2" textAlign="center">
            {error}
          </Typography>
        )}

        <TextField
          variant="filled"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          InputProps={{
            style: {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "#fff",
              borderRadius: 8,
              mx: 'auto',
              width: '100%',
            },
          }}
          InputLabelProps={{ style: { color: "#eee" } }}
          required
          autoComplete="username"
        />

        <TextField
          variant="filled"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          InputProps={{
            style: {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "#fff",
              borderRadius: 8,
              width :'100%',
              mx: 'auto'
            },
          }}
          InputLabelProps={{ style: { color: "#eee" } }}
          required
          autoComplete="current-password"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ fontWeight: 600, mt: 1, backgroundColor: "rgba(63,23,160)", width: '90%', mx: 'auto'}}
        >
          Login
        </Button>

        <Box sx={{ mt: 1, display: "flex", justifyContent: "center",width: '90%', mx: 'auto' }}>
          <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
        </Box>
      </Box>
    </Dialog>
  );
};

export default LoginDialog;
