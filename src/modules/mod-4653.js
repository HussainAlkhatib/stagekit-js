'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4653",
  name: "Replace \"9\" with \"3\"",
  description: "Replaces every 9 with 3.",
  run: (value) => String(value).split("9").join("3"),
});
