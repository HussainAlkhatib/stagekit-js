'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2369",
  name: "Replace \"y\" with \"D\"",
  description: "Replaces every y with D.",
  run: (value) => String(value).split("y").join("D"),
});
