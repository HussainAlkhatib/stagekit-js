'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2186",
  name: "Replace \"v\" with \"D\"",
  description: "Replaces every v with D.",
  run: (value) => String(value).split("v").join("D"),
});
