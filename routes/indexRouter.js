const { Router } = require('express');
const indexRouter = Router();

const messages = [
  {
    added: new Date(),
    text: 'Hello world!',
    user: 'Catherine',
  },
  {
    added: new Date(),
    text: 'This is why I hate flying...',
    user: 'Obi-Wan Kenobi',
  },
];

indexRouter.get('/new', (req, res) => {
  res.render("form");
})

indexRouter.post('/new', (req, res) => {
  messages.push({added: new Date(), text: req.body.userMessage, user: req.body.userName });
  res.redirect('/');
})

indexRouter.get('/', (req, res) => {
  res.render("index", { messages: messages });
});

module.exports = indexRouter;