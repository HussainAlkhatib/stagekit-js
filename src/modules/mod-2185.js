'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2185",
  name: "Replace \"v\" with \"C\"",
  description: "Replaces every v with C.",
  run: (value) => String(value).split("v").join("C"),
});
