'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0238",
  name: "Truncate to 19",
  description: "Keeps the first 19 characters.",
  run: (value) => String(value).slice(0, 19),
});
