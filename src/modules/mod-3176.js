'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3176",
  name: "Replace \"L\" with \"R\"",
  description: "Replaces every L with R.",
  run: (value) => String(value).split("L").join("R"),
});
