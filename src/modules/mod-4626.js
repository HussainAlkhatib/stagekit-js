'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4626",
  name: "Replace \"9\" with \"C\"",
  description: "Replaces every 9 with C.",
  run: (value) => String(value).split("9").join("C"),
});
