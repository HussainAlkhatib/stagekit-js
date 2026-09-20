'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3194",
  name: "Replace \"L\" with \"9\"",
  description: "Replaces every L with 9.",
  run: (value) => String(value).split("L").join("9"),
});
