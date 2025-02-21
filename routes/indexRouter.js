const { Router } = require('express');
const indexRouter = Router();
const messageData = require('../models/db');
messages = messageData.getAllMessages();

indexRouter.get('/new', (req, res) => {
  res.render("form");
})

indexRouter.post('/new', (req, res) => {
  messages.push({added: new Date(), id: messages.length, text: req.body.userMessage, user: req.body.userName });
  res.redirect('/');
})

indexRouter.get('/', (req, res) => {
  res.render("index", { messages: messages });
});

module.exports = indexRouter;