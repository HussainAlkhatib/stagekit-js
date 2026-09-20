'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1698",
  name: "Replace \"n\" with \"D\"",
  description: "Replaces every n with D.",
  run: (value) => String(value).split("n").join("D"),
});
