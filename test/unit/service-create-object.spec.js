'use strict';

const expect      = require('chai').expect;
const utils       = require('./utils');
const baServices  = require('../../lib/services');

describe('bacnet - Services layer CreateObject unit', () => {
  it('should successfully encode and decode', () => {
    const buffer = utils.getBuffer();
    const date = new Date(1, 1, 1);
    const time = new Date(1, 1, 1);
    time.setMilliseconds(990);
    baServices.createObject.encode(buffer, {type: 1, instance: 10}, [
      {property: {id: 81, index: 0xFFFFFFFF}, value: [
        {type: 0},
        {type: 1, value: null},
        {type: 1, value: true},
        {type: 1, value: false},
        {type: 2, value: 1},
        {type: 2, value: 1000},
        {type: 2, value: 1000000},
        {type: 2, value: 1000000000},
        {type: 3, value: -1},
        {type: 3, value: -1000},
        {type: 3, value: -1000000},
        {type: 3, value: -1000000000},
        {type: 4, value: 0.1},
        {type: 5, value: 100.121212},
        {type: 6, value: [1, 2, 100, 200]},
        {type: 7, value: 'Test1234$'},
        {type: 8, value: {bitsUsed: 0, value: []}},
        {type: 8, value: {bitsUsed: 24, value: [0xAA, 0xAA, 0xAA]}},
        {type: 9, value: 4},
        {type: 10, value: date},
        {type: 11, value: time}
      ], priority: 0},
      {property: {id: 82, index: 0}, value: [
        {type: 12, value: {type: 3, instance: 0}}
      ], priority: 0}
    ]);
    const result = baServices.createObject.decode(buffer.buffer, 0, buffer.offset);
    delete result.len;
    result.values[0].value[12].value = Math.floor(result.values[0].value[12].value * 1000) / 1000;
    expect(result).to.deep.equal({
      objectId: {
        type: 1,
        instance: 10
      },
      values: [
        {
          property: {
            index: 0xFFFFFFFF,
            id: 81
          },
          value: [
            {type: 0, value: null},
            {type: 0, value: null},
            {type: 1, value: true},
            {type: 1, value: false},
            {type: 2, value: 1},
            {type: 2, value: 1000},
            {type: 2, value: 1000000},
            {type: 2, value: 1000000000},
            {type: 3, value: -1},
            {type: 3, value: -1000},
            {type: 3, value: -1000000},
            {type: 3, value: -1000000000},
            {type: 4, value: 0.1},
            {type: 5, value: 100.121212},
            {type: 6, value: [1, 2, 100, 200]},
            {type: 7, value: 'Test1234$', encoding: 0},
            {type: 8, value: {bitsUsed: 0, value: []}},
            {type: 8, value: {bitsUsed: 24, value: [0xAA, 0xAA, 0xAA]}},
            {type: 9, value: 4},
            {type: 10, value: date},
            {type: 11, value: time}
          ]
        },
        {
          property: {
            index: 0xFFFFFFFF,
            id: 82
          },
          value: [
            {type: 12, value: {type: 3, instance: 0}}
          ]
        }
      ]
    });
  });
});
