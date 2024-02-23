'use strict';

const Bacnet = require('../index');

// create instance of Bacnet
const bacnetClient = new Bacnet({ apduTimeout: 2000, port: 47808 });

// emitted on errors
bacnetClient.on('error', (err) => {
  console.error(err);
  bacnetClient.close();
});

bacnetClient.readProperty('192.168.40.245', { type: 8, instance: 1319071 }, Bacnet.enum.PropertyIdentifier.PROPERTY_LIST, { maxSegments: Bacnet.enum.Segmentation.NO_SEGMENTATION, arrayIndex: 200 }, (err, value) => {
  if (err) console.log(err);
  if (value) console.log(value);
  //bacnetClient.close();
});
