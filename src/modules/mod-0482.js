'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0482",
  name: "Truncate to 70",
  description: "Keeps the first 70 characters.",
  run: (value) => String(value).slice(0, 70),
});
