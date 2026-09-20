'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0032",
  name: "Base64 decode",
  description: "Decodes a base64 string.",
  run: (value) => Buffer.from(String(value), 'base64').toString('utf8'),
});
