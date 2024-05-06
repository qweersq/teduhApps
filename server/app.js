const express = require('express');
const app = express();
const port = 3002;
const cors = require('cors');
const path = require('path');
const sequelize = require('./config/database');

const userRoutes = require('./routes/userRoutes'); 


sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});

app.use(cors(
    {
        origin: '*',
        credentials: true,
    },
));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const urlApiV1 = '/api/v1';

app.use(urlApiV1, userRoutes);