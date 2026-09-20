'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3163",
  name: "Replace \"L\" with \"D\"",
  description: "Replaces every L with D.",
  run: (value) => String(value).split("L").join("D"),
});
