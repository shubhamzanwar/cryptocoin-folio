const Models = require('../../../models');

const getNotification = userId => Models.notifications.findAll({
  where: {
    userId,
  },
})
  .then(result => result.map(notification => ({
    transactionId: notification.dataValues.transactionId,
    text: notification.dataValues.text,
  })));

module.exports = getNotification;
