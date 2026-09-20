'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0015",
  name: "Base64 encode",
  description: "Encodes the value as base64.",
  run: (value) => Buffer.from(String(value), 'utf8').toString('base64'),
});
