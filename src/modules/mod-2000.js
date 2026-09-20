'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2000",
  name: "Replace \"s\" with \"A\"",
  description: "Replaces every s with A.",
  run: (value) => String(value).split("s").join("A"),
});
