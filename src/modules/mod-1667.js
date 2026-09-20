'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1667",
  name: "Replace \"m\" with \"7\"",
  description: "Replaces every m with 7.",
  run: (value) => String(value).split("m").join("7"),
});
