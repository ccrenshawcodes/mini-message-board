const { Router } = require('express');
const indexRouter = Router();

const messages = [
  {
    added: new Date(),
    id: 0,
    text: 'Hello world!',
    user: 'Catherine',
  },
  {
    added: new Date(),
    id: 1,
    text: 'This is why I hate flying...',
    user: 'Obi-Wan Kenobi',
  },
];

indexRouter.get('/', (req, res) => {
  res.render("index", { messages: messages });
});

module.exports = indexRouter;