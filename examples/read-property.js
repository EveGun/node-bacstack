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

bacnetClient.readProperty('192.168.40.50', { type: 8, instance: 620643 }, Bacnet.enum.PropertyIdentifier.OBJECT_LIST, { maxSegments: Bacnet.enum.MaxSegmentsAccepted.SEGMENTS_65 }, (err, value) => {
  if (err) console.log(err);
  if (value) console.log(value);
  //bacnetClient.close();
});