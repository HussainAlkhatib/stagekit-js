'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4075",
  name: "Replace \"0\" with \"A\"",
  description: "Replaces every 0 with A.",
  run: (value) => String(value).split("0").join("A"),
});
