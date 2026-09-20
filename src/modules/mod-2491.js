'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2491",
  name: "Replace \"A\" with \"D\"",
  description: "Replaces every A with D.",
  run: (value) => String(value).split("A").join("D"),
});
