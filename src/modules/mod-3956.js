'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3956",
  name: "Replace \"Y\" with \"D\"",
  description: "Replaces every Y with D.",
  run: (value) => String(value).split("Y").join("D"),
});
