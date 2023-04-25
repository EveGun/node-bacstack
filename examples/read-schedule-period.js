'use strict';

/**
 * This script will discover all devices in the network and print out their names
 *
 * After 30s the discovery is stopped automatically
 */

const Bacnet = require('../index');

// create instance of Bacnet
const bacnetClient = new Bacnet({ apduTimeout: 2000 });
// emitted on errors
bacnetClient.on('error', (err) => {
  console.error(err);
  bacnetClient.close();
});

bacnetClient.readProperty('192.168.40.245', { type: 17, instance: 0 }, Bacnet.enum.PropertyIdentifier.EFFECTIVE_PERIOD, (err, value) => {
  if (err) console.log(err);
  if (value) console.log(value);
  bacnetClient.close();
});
