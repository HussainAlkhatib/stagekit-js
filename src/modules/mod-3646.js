'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3646",
  name: "Replace \"T\" with \"y\"",
  description: "Replaces every T with y.",
  run: (value) => String(value).split("T").join("y"),
});
