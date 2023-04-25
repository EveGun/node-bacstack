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

bacnetClient.writeProperty(
  '192.168.40.245',
  { type: Bacnet.enum.ObjectType.CALENDAR, instance: 0 },
  Bacnet.enum.PropertyIdentifier.DATE_LIST,
  [
    { type: 10, value: 1690927200000 },
    { type: 10, value: 1682546400000 },
    { type: 10, value: 1690203600000 },
  ],
  (err, value) => {
    if (err) console.log(err);
    if (value) console.log(value);
    bacnetClient.close();
  }
);
