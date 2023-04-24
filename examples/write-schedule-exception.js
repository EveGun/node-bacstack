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
  { type: 17, instance: 0 },
  Bacnet.enum.PropertyIdentifier.WEEKLY_SCHEDULE,
  [
    [
      {
        date: { value: 1684965600000 },
        events: [{ time: { value: 1684965600000, type: 10 }, value: { time: 11, value: -2174778000000 }, value: { type: 1, value: true } }],
        priority: { type: 3, value: 1 },
      },
    ],
  ],
  {},
  (err, value) => {
    if (err) console.log(err);
    if (value) console.log(value);
    bacnetClient.close();
  }
);
