'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4104",
  name: "Replace \"0\" with \"4\"",
  description: "Replaces every 0 with 4.",
  run: (value) => String(value).split("0").join("4"),
});
