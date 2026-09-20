'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2495",
  name: "Replace \"A\" with \"H\"",
  description: "Replaces every A with H.",
  run: (value) => String(value).split("A").join("H"),
});
