'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2377",
  name: "Replace \"y\" with \"L\"",
  description: "Replaces every y with L.",
  run: (value) => String(value).split("y").join("L"),
});
