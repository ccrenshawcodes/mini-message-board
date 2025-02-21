const { Router } = require ('express');
const { getMessageById } = require('../controllers/messagesController');
const messagesRouter = Router();

messagesRouter.get('/', (req, res) => res.redirect('/'));
messagesRouter.get('/:messageId', getMessageById);

module.exports = messagesRouter;