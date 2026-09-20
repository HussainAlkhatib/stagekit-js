'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2003",
  name: "Replace \"s\" with \"D\"",
  description: "Replaces every s with D.",
  run: (value) => String(value).split("s").join("D"),
});
