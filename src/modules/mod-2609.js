'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2609",
  name: "Replace \"C\" with \"y\"",
  description: "Replaces every C with y.",
  run: (value) => String(value).split("C").join("y"),
});
