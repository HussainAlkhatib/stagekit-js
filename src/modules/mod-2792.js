'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2792",
  name: "Replace \"F\" with \"y\"",
  description: "Replaces every F with y.",
  run: (value) => String(value).split("F").join("y"),
});
