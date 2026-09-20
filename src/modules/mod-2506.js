'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2506",
  name: "Replace \"A\" with \"S\"",
  description: "Replaces every A with S.",
  run: (value) => String(value).split("A").join("S"),
});
