'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0083",
  name: "Binary encode",
  description: "Encodes each character as 8 bits.",
  run: (value) => String(value).split('').map((ch) => ch.charCodeAt(0).toString(2).padStart(8, '0')).join(' '),
});
