'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0372",
  name: "Truncate to 43",
  description: "Keeps the first 43 characters.",
  run: (value) => String(value).slice(0, 43),
});
