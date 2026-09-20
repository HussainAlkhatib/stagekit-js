'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3191",
  name: "Replace \"L\" with \"6\"",
  description: "Replaces every L with 6.",
  run: (value) => String(value).split("L").join("6"),
});
