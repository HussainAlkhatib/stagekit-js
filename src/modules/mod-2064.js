'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2064",
  name: "Replace \"t\" with \"D\"",
  description: "Replaces every t with D.",
  run: (value) => String(value).split("t").join("D"),
});
