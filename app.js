const express = require('express');
const app = express();

const path = require("node:path");
const indexRouter = require('./routes/indexRouter');
const messagesRouter = require('./routes/messagesRouter');

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use('/messages', messagesRouter)
app.use('/', indexRouter);

app.listen(PORT, () => console.log(`mini message board running on port ${PORT}`));