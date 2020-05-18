'use strict';

const expect      = require('chai').expect;
const utils       = require('./utils');

describe('bacnet - getEnrollmentSummary integration', () => {
  it('should return a timeout error if no device is available', (next) => {
    const client = new utils.bacnetClient({apduTimeout: 200});
    client.getEnrollmentSummary('127.0.0.1', 0, {notificationClassFilter: 5}, (err, value) => {
      expect(err.message).to.eql('ERR_TIMEOUT');
      expect(value).to.eql(undefined);
      client.close();
      next();
    });
  });
});
