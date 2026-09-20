'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4652",
  name: "Replace \"9\" with \"2\"",
  description: "Replaces every 9 with 2.",
  run: (value) => String(value).split("9").join("2"),
});
