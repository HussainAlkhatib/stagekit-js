'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1998",
  name: "Replace \"s\" with \"y\"",
  description: "Replaces every s with y.",
  run: (value) => String(value).split("s").join("y"),
});
