'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3648",
  name: "Replace \"T\" with \"A\"",
  description: "Replaces every T with A.",
  run: (value) => String(value).split("T").join("A"),
});
