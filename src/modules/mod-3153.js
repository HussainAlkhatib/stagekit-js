'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3153",
  name: "Replace \"L\" with \"t\"",
  description: "Replaces every L with t.",
  run: (value) => String(value).split("L").join("t"),
});
