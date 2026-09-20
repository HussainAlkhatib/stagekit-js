'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0270",
  name: "Truncate to 23",
  description: "Keeps the first 23 characters.",
  run: (value) => String(value).slice(0, 23),
});
