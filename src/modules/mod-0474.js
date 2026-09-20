'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0474",
  name: "Truncate to 68",
  description: "Keeps the first 68 characters.",
  run: (value) => String(value).slice(0, 68),
});
