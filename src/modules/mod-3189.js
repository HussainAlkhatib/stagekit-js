'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3189",
  name: "Replace \"L\" with \"4\"",
  description: "Replaces every L with 4.",
  run: (value) => String(value).split("L").join("4"),
});
