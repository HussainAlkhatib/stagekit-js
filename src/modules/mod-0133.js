'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0133",
  name: "HTML escape",
  description: "Escapes ampersands and angle brackets.",
  run: (value) => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'),
});
