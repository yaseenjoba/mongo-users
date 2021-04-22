const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const usersettings = require('./models/usersettings');
const userRouter = require('./routers/user');
const userSettingsRouter = require('./routers/usersettings');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(userSettingsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})