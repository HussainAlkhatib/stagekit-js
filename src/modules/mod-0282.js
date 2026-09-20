'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0282",
  name: "Truncate to 25",
  description: "Keeps the first 25 characters.",
  run: (value) => String(value).slice(0, 25),
});
