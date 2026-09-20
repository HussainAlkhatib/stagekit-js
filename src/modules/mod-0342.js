'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0342",
  name: "Truncate to 37",
  description: "Keeps the first 37 characters.",
  run: (value) => String(value).slice(0, 37),
});
