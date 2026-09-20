'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2736",
  name: "Replace \"E\" with \"D\"",
  description: "Replaces every E with D.",
  run: (value) => String(value).split("E").join("D"),
});
