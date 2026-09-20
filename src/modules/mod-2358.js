'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2358",
  name: "Replace \"y\" with \"r\"",
  description: "Replaces every y with r.",
  run: (value) => String(value).split("y").join("r"),
});
