'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0066",
  name: "Hex decode",
  description: "Decodes a hexadecimal string.",
  run: (value) => Buffer.from(String(value), 'hex').toString('utf8'),
});
