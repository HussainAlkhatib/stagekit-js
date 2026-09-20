'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2611",
  name: "Replace \"C\" with \"A\"",
  description: "Replaces every C with A.",
  run: (value) => String(value).split("C").join("A"),
});
