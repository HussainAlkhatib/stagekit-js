'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3150",
  name: "Replace \"L\" with \"q\"",
  description: "Replaces every L with q.",
  run: (value) => String(value).split("L").join("q"),
});
