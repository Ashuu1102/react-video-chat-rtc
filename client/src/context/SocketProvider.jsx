import React, { createContext, useMemo, useContext } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext(null);

export const useSocket = () => {
    const socket = useContext(SocketContext);
    return socket;
};

export const SocketProvider = (props) => {
    // Determine the socket server URL based on the environment
    const socketUrl = process.env.NODE_ENV === 'production'
        ? 'https://react-video-chat-rtc.onrender.com' // Change this to your actual production URL
        : 'http://localhost:8000'; // Development URL

    const socket = useMemo(() => io(socketUrl), [socketUrl]);

    return (
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    );
};
