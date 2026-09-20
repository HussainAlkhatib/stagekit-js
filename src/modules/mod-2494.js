'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2494",
  name: "Replace \"A\" with \"G\"",
  description: "Replaces every A with G.",
  run: (value) => String(value).split("A").join("G"),
});
