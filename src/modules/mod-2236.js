'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2236",
  name: "Replace \"w\" with \"r\"",
  description: "Replaces every w with r.",
  run: (value) => String(value).split("w").join("r"),
});
