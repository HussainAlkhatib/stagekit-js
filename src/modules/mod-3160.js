'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3160",
  name: "Replace \"L\" with \"A\"",
  description: "Replaces every L with A.",
  run: (value) => String(value).split("L").join("A"),
});
