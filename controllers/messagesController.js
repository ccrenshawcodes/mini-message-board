const db = require('../models/db');
const asyncHandler = require('express-async-handler');
const MessageNotFoundError = require('../errors/messageNotFoundError');

const getMessageById = asyncHandler(async (req, res) => {
  const { messageId } = req.params;

  const message = await db.getMessageById(Number(messageId));

  if (!message) {
    throw new MessageNotFoundError('Message not found');
  }

  res.render("message", { added: message.added, message: message.text, user: message.user });
})

module.exports = { getMessageById };