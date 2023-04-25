'use strict';

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
  Bacnet.enum.PropertyIdentifier.EXCEPTION_SCHEDULE,
  [
    // one row for each exception
    {
      date: {
        type: 10,
        value: 1684965600000,
      },
      events: [
        {
          time: {
            type: 11,
            value: -2174778000000,
          },
          value: {
            type: 1,
            value: true,
          },
        },
        {
          time: {
            type: 11,
            value: -2174774400000,
          },
          value: {
            type: 1,
            value: false,
          },
        },
      ],
      priority: {
        type: 3,
        value: 1,
      },
    },
    {
      date: {
        type: 10,
        value: 1685224800000,
      },
      events: [
        {
          time: {
            type: 11,
            value: -2174716800000,
          },
          value: {
            type: 9,
            value: 3,
          },
        },
      ],
      priority: {
        type: 3,
        value: 2,
      },
    },
  ],

  {},
  (err, value) => {
    if (err) console.log(err);
    if (value) console.log(value);
    bacnetClient.close();
  }
);
