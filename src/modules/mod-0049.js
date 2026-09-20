'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0049",
  name: "Hex encode",
  description: "Encodes the value as hexadecimal.",
  run: (value) => Buffer.from(String(value), 'utf8').toString('hex'),
});
