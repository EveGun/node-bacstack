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

bacnetClient.readProperty(
  '192.168.40.245',
  { type: 6, instance: 0 },
  Bacnet.enum.PropertyIdentifier.DATE_LIST,
  (err, value) => {
    if (err) console.log(err);
    if (value) value.values.forEach((val, index) => console.log('day: ' + index, val));
    bacnetClient.close();
  }
);
return;
console.log(Bacnet.enum.PropertyIdentifier);

bacnetClient.writeProperty(
  '192.168.40.245',
  { type: 6, instance: 0 },
  Bacnet.enum.PropertyIdentifier.DATE_LIST,
  [
    {
      type: Bacnet.enum.PropertyIdentifier.DATE,
      value: { len: 4, year: 123, month: 8, day: 3, wday: 4 },
    },
    {
      type: Bacnet.enum.PropertyIdentifier.DATE,
      value: { len: 4, year: 123, month: 4, day: 20, wday: 4 },
    },
  ],
  {},
  (err, value) => {
    if (err) console.log(err);
    if (value) console.log(value);
  }
);
