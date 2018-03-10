const Models = require('../../../models');

const editTransaction = (userId, transactionId, quantity, price, coinId) =>
  Models.transactions.upsert({
    id: transactionId,
    toId: userId,
    fromId: 1,
    quantity,
    price,
    coinId,
  }).then(() => 'transaction edited').catch(() => 'transaction not edited');

module.exports = editTransaction;
