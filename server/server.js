const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const { Server } = require('socket.io');
require('dotenv').config();

const PORT = process.env.PORT || 4500;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: process.env.CLIENT_URL,
        methods: ["GET", "POST"],
    },
});

app.use(cors({
    origin: process.env.CLIENT_URL,
    optionsSuccessStatus: 200, // For legacy browser support
}));

// Import routes
const authRoutes = require('./routes/auth.route.js');
const userRoutes = require('./routes/user.route.js');
const roomRoutes = require('./routes/room.route.js');
const messageRoutes = require('./routes/message.route.js');
const compilerRoutes = require('./routes/compiler.route.js');

// Socket.io listener
const socketListen = require('./socketComm.js');
socketListen(io);

// Import global middlewares
const { setClientHeader } = require('./validators/index.validator.js');
const connectToMongoDB = require('./db/dbConnect.js');

// App middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
if (process.env.NODE_ENV === 'development') {
    app.use(cors({ origin: `http://localhost:${PORT}` }));
}

// Test route
app.get('/api/test', (req, res) => {
    console.log("Received test request");
    res.json({ message: "Backend is working" });
});

// Routes
app.use('/api', setClientHeader, authRoutes);
app.use('/api', setClientHeader, userRoutes);
app.use('/api/rooms', setClientHeader, roomRoutes);
app.use('/api/messages', setClientHeader, messageRoutes);
app.use("/api/compiler", compilerRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on PORT: ${PORT}`);
}).on('error', (err) => {
    console.error('Server error:', err);
});