'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1329",
  name: "Replace \"h\" with \"A\"",
  description: "Replaces every h with A.",
  run: (value) => String(value).split("h").join("A"),
});
