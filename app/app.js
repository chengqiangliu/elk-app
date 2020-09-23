const path = require('path');
const Logger = require('./common/logger');
const Constants = require('./common/constants');

const LOG = Logger.App;
LOG.addContext('FILE_NAME', path.basename(__filename))
LOG.addContext('MESSAGE_ID', 'da6269b6-ca49-4dc8-8c4f-f9dde2f9c2f7');

for (let i = 0; i<50; i++) {
  let num = i % 18;
  let errorCode;
  if (num < 10) {
    errorCode = 'MSG_ER_EH0000' + num;
  } else {
    errorCode = 'MSG_ER_EH000' + num;
  }
  LOG.info(Constants[errorCode]);
}


