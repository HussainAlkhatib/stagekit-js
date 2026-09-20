'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2472",
  name: "Replace \"A\" with \"j\"",
  description: "Replaces every A with j.",
  run: (value) => String(value).split("A").join("j"),
});
