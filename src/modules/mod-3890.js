'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3890",
  name: "Replace \"X\" with \"y\"",
  description: "Replaces every X with y.",
  run: (value) => String(value).split("X").join("y"),
});
