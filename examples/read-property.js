'use strict';

const Bacnet = require('../index');

// create instance of Bacnet
const bacnetClient = new Bacnet({ apduTimeout: 2000, port: 47808, bacnetDeviceOptions: { executesReadPropertyMultiple: false, storeDiscoveredDevices: true } });

// emitted on errors
bacnetClient.on('error', (err) => {
  console.error(err);
  bacnetClient.close();
});

bacnetClient.readProperty('192.168.40.245', { type: 8, instance: 1319071 }, Bacnet.enum.PropertyIdentifier.DEVICE_ADDRESS_BINDING, { maxSegments: Bacnet.enum.Segmentation.NO_SEGMENTATION }, (err, value) => {
  if (err) console.log(err);
  if (value) console.log(value.values);
  //bacnetClient.close();
});
