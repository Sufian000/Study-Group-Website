import { useEffect, useRef } from "react";
import { createContext, useState } from "react";

import { io } from 'socket.io-client';

export const AccountContext = createContext(null);

const AccountProvider = ({children}) => {
    
    const [account, setAccount] = useState();
    const [person, setPerson] = useState({});
    const [activeUsers, setActiveUsers] = useState([]);
    const [ newMessageFlag, setNewMessageFlag ] = useState(false);

    const socket = useRef();

    useEffect(() => {
        socket.current = io('ws://localhost:9000')

        socket.current.on("active-users", (users) => {
    setActiveUsers(users);
  });
    }, [])

    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            person,
            setPerson,
            socket,
            activeUsers,
            setActiveUsers,
            newMessageFlag,
            setNewMessageFlag

        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;