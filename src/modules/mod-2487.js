'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2487",
  name: "Replace \"A\" with \"y\"",
  description: "Replaces every A with y.",
  run: (value) => String(value).split("A").join("y"),
});
