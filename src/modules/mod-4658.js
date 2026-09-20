'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4658",
  name: "Replace \"9\" with \"8\"",
  description: "Replaces every 9 with 8.",
  run: (value) => String(value).split("9").join("8"),
});
