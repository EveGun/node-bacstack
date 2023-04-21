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
        time: { len: 4, type: 11, value: new Date(1, 1, 1, 7, 0, 0) },
        value: { len: 0, type: 1, value: true },
      },
      {
        time: { len: 4, type: 11, value: new Date(1, 1, 1, 16, 0, 0) },
        value: { len: 0, type: 1, value: false },
      },
    ],
    [
      {
        time: { len: 4, type: 11, value: new Date(1, 1, 1, 7, 0, 0) },
        value: { len: 0, type: 1, value: true },
      },
      {
        time: { len: 4, type: 11, value: new Date(1, 1, 1, 16, 0, 0) },
        value: { len: 0, type: 1, value: false },
      },
    ],
    [
      {
        time: { len: 4, type: 11, value: new Date(1, 1, 1, 7, 0, 0) },
        value: { len: 0, type: 1, value: true },
      },
      {
        time: { len: 4, type: 11, value: new Date(1, 1, 1, 16, 0, 0) },
        value: { len: 0, type: 1, value: false },
      },
    ],
    [
      {
        time: { len: 4, type: 11, value: new Date(1, 1, 1, 7, 0, 0) },
        value: { len: 0, type: 1, value: true },
      },
      {
        time: { len: 4, type: 11, value: new Date(1, 1, 1, 16, 0, 0) },
        value: { len: 0, type: 1, value: false },
      },
    ],
    [
      {
        time: { len: 4, type: 11, value: new Date(1, 1, 1, 7, 0, 0) },
        value: { len: 0, type: 1, value: true },
      },
      {
        time: { len: 4, type: 11, value: new Date(1, 1, 1, 16, 0, 0) },
        value: { len: 0, type: 1, value: false },
      },
    ],
    [
      {
        time: { len: 4, type: 11, value: new Date(1, 1, 1, 7, 0, 0) },
        value: { len: 0, type: 1, value: true },
      },
      {
        time: { len: 4, type: 11, value: new Date(1, 1, 1, 16, 0, 0) },
        value: { len: 0, type: 1, value: false },
      },
    ],
    [
      {
        time: { len: 4, type: 11, value: new Date(1, 1, 1, 7, 0, 0) },
        value: { len: 0, type: 1, value: true },
      },
      {
        time: { len: 4, type: 11, value: new Date(1, 1, 1, 16, 0, 0) },
        value: { len: 0, type: 1, value: false },
      },
      {
        time: { len: 4, type: 11, value: new Date(1, 1, 1, 8, 0, 0) },
        value: { len: 0, type: 9, value: 1 },
      },
      {
        time: { len: 4, type: 11, value: new Date(1, 1, 1, 17, 0, 0) },
        value: { len: 0, type: 9, value: 2 },
      },
    ],
  ],
  {},
  (err, value) => {
    if (err) console.log(err);
    if (value) console.log(value);
  }
);
