'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1695",
  name: "Replace \"n\" with \"A\"",
  description: "Replaces every n with A.",
  run: (value) => String(value).split("n").join("A"),
});
