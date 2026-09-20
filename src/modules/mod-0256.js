'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0256",
  name: "Truncate to 21",
  description: "Keeps the first 21 characters.",
  run: (value) => String(value).slice(0, 21),
});
