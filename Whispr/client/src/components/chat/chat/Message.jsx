import { useContext } from 'react';

import { Box, Typography, styled } from '@mui/material';

import { formatDate } from '../../../utils/common-utils.js';

import { AccountContext } from '../../../context/AccountProvider';

const Own = styled(Box) `
    background: #c31432;

    background: -webkit-linear-gradient(to right, #240b36, #c31432);

    background: linear-gradient(to right, #240b36, #c31432);

    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    image-rendering: optimizeQuality;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0);
    box-shadow: 0 8px 32px 0 rgba(53, 33, 121, 0.5);


    padding: 5px;
    max-width: 60%;
    width: fit-content;
    margin-left: auto;
    display: flex;
    border-radius: 10px;
    word-break: break-word;

`

const Wrapper = styled(Box) `
    background: #c31432;

    background: -webkit-linear-gradient(to right, #240b36, #c31432);

    background: linear-gradient(to right, #240b36, #c31432);

    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    image-rendering: optimizeQuality;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0);


    padding: 5px;
    max-width: 60%;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
    box-shadow: 0 8px 32px 0 rgba(53, 33, 121, 0.5);

`

const Text = styled(Typography)`
    font-size: 15px;
    padding: 0 25px 0 5px;
`
const Time = styled(Typography)`
    font-size: 10px;
    margin-top: 6px;
    word-break: keep-all;
    margin-top: auto;
`


export const Message = ({ message }) => {
  const { account } = useContext(AccountContext);

  return (
    <>
      {account.sub === message.senderId ? 
        <Own>
          <Text>{message.text}</Text>
          <Time>{formatDate(message.createdAt)}</Time>
        </Own>
       : 
        <Wrapper>
          <Text>{message.text}</Text>
          <Time>{formatDate(message.createdAt)}</Time>
        </Wrapper>
      }
    </>
  );
};

export default Message;