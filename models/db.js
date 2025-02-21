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

async function getMessageById(messageId) {
  return messages.find(message => message.id === messageId);
};

function getAllMessages() {
  return messages;
}

module.exports = { getMessageById, getAllMessages };