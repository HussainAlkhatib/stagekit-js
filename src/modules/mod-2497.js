'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2497",
  name: "Replace \"A\" with \"J\"",
  description: "Replaces every A with J.",
  run: (value) => String(value).split("A").join("J"),
});
