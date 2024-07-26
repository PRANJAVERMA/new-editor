// import { io } from 'socket.io-client';
//
// export const initSocket = async () => {
//     const options = {
//         'force new connection': true,
//         reconnectionAttempt: 'Infinity',
//         timeout: 10000,
//         transports: ['websocket'],
//     };
//     return io(process.env.REACT_APP_BACKEND_URL, options);
// };

// import { io } from 'socket.io-client';
//
// export const initSocket = async () => {
//     const options = {
//         'force new connection': true,
//         reconnectionAttempts: 'Infinity', // Corrected option name
//         timeout: 10000,
//         transports: ['websocket'],
//         autoConnect: true,
//     };
//     const socket = io(process.env.REACT_APP_BACKEND_URL, options);
//
//     // Add some event listeners to understand the connection status
//     socket.on('connect', () => {
//         console.log('Socket connected successfully');
//     });
//
//     socket.on('connect_error', (err) => {
//         console.log('Connection error:', err.message);
//     });
//
//     socket.on('disconnect', (reason) => {
//         console.log('Socket disconnected:', reason);
//     });
//
//     return socket;
// };

// socket.js
// import io from 'socket.io-client';
//
// const initSocket = async () => {
//     const socket = io('http://localhost:3002'); // Replace with your server URL
//     return socket;
// };
//
// export { initSocket };
