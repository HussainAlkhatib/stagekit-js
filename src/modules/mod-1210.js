'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1210",
  name: "Replace \"f\" with \"D\"",
  description: "Replaces every f with D.",
  run: (value) => String(value).split("f").join("D"),
});
