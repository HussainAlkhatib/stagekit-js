'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4502",
  name: "Replace \"7\" with \"A\"",
  description: "Replaces every 7 with A.",
  run: (value) => String(value).split("7").join("A"),
});
