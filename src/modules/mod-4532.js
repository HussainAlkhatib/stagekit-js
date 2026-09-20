'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4532",
  name: "Replace \"7\" with \"4\"",
  description: "Replaces every 7 with 4.",
  run: (value) => String(value).split("7").join("4"),
});
