'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2056",
  name: "Replace \"t\" with \"v\"",
  description: "Replaces every t with v.",
  run: (value) => String(value).split("t").join("v"),
});
