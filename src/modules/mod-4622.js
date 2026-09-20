'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4622",
  name: "Replace \"9\" with \"y\"",
  description: "Replaces every 9 with y.",
  run: (value) => String(value).split("9").join("y"),
});
