'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3141",
  name: "Replace \"L\" with \"h\"",
  description: "Replaces every L with h.",
  run: (value) => String(value).split("L").join("h"),
});
