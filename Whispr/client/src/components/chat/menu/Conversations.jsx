
import { useEffect, useState, useContext } from "react";

import { Box, styled } from "@mui/material";

import { getUsers } from "../../../service/api";
import { AccountContext } from "../../../context/AccountProvider";


//components
import Conversation from "./Conversation";

const Component = styled(Box)   `
    height: 100vh;
    overflow: overlay;
    
`




const Conversations = ({ text }) => {
    
    const [users, setUsers] = useState([]);

    const { account, socket, setActiveUsers, newMessageFlag } = useContext(AccountContext);

    useEffect( () => {
        const fetchData = async () => {
            let response = await getUsers();

            const uniqueUsers = response.filter(
            (user, index, self) =>
            index === self.findIndex((u) => u.sub === user.sub)
            );
            const filteredData = uniqueUsers.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
        }
        
        fetchData();
    }, [text])

    useEffect (() => {
        socket.current.emit('addUser', account);
        socket.current.on('getUsers', users => {
            setActiveUsers(users);
        })
    }, [account])

    return (
        <Component>
            {
                users.map(user => (
                    user.sub !== account.sub &&
                    <>
                        <Conversation  user={user}/>
                        
                    </>
                ))
                
            }
        </Component>
    )

}

export default Conversations;
