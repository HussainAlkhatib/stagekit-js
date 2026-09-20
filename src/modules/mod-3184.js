'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3184",
  name: "Replace \"L\" with \"Z\"",
  description: "Replaces every L with Z.",
  run: (value) => String(value).split("L").join("Z"),
});
