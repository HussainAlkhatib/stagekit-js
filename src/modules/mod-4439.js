'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4439",
  name: "Replace \"6\" with \"y\"",
  description: "Replaces every 6 with y.",
  run: (value) => String(value).split("6").join("y"),
});
