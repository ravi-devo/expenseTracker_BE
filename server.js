const express = require('express');
const app = express();
const dotenv = require('dotenv');
const dbConnection = require('./databaseConnection/db');
const userRoutes = require('./router/userRoutes');

dotenv.config();
dbConnection();

const port = process.env.PORT;

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log("Server is running on port", port);
});