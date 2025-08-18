import { useContext, useState, useEffect, Component } from "react";

import { Box, Typography, styled, useTheme } from "@mui/material";


import { AccountContext } from '../../../context/AccountProvider'

import { newMessage, getMessage } from "../../../service/api";

//components
import Footer from "./Footer";
import Message from "./Message";



const Container = styled(Box)(({ theme }) => ({
  background: "rgba(108, 106, 106, 0.15)",
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  boxShadow: "0 8px 32px 0 rgba(53, 33, 121, 0.5)",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  height: "100%", // take full height of parent
  width: "100%",
  padding: 0,
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const Wrapper = styled(Box)(({ theme }) => ({
  flex: 1, // take all remaining space
  overflowY: "auto",
  padding: theme.spacing(2),
}));

const Camponent = styled(Box)(({ theme }) => ({
  flex: 1, // take all remaining space
  padding: '7px 20px',
}));

const Messages = ({ person, conversation }) => {
  const theme = useTheme();

  const [ value, setValue ] = useState('');
  const [ messages, setMessages ] = useState([]);
  
  const [ file, setFile ] = useState();
  const [ image ,setImage ] = useState('');
  const [ incomingMessage, setIncomingMessage ] = useState(null);

  const { account, socket, newMessageFlag,setNewMessageFlag } = useContext(AccountContext);

  useEffect(() => {
    socket.current.on('getMessage', data => {
      setIncomingMessage({
          ...data,
          createdAt: Date.now()
      })
    })
  }, [])

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessage(conversation._id);
      setMessages(data);
    }
    conversation._id && getMessageDetails();
  }, [person._id, conversation._id, newMessageFlag]);

  useEffect(() => {
      incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && 
        setMessages(prev => [...prev, incomingMessage ])
  }, [incomingMessage, conversation])

  const sendText = async (e) => {
    console.log(e);
    const code = e.keyCode || e.which;
    if( code === 13){
      let message ={};
      if(!file) {
         message ={
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: 'text',
          text: value
        }}
      else { 
        message ={
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: 'file',
          text: image
        }}
        
        socket.current.emit('sendMessage', message);
        
        await newMessage(message);

        setValue('');
        setImage('');
        setFile('');
        setNewMessageFlag(prev => !prev);
    }
  }

  return (
      <Container>
        <Wrapper>
            {
              messages && messages.map(message => (
                <Camponent>
                <Message message={message} />
                </Camponent>
              ))
            }
        </Wrapper>
        <Footer 
          sendText={sendText}
          setValue={setValue}
          value={value}
          file={file}
          setFile={setFile}
          setImage={setImage}
        />
      </Container>
   
  );
};

export default Messages;
