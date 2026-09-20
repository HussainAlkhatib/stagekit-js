'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2177",
  name: "Replace \"v\" with \"t\"",
  description: "Replaces every v with t.",
  run: (value) => String(value).split("v").join("t"),
});
