'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3146",
  name: "Replace \"L\" with \"m\"",
  description: "Replaces every L with m.",
  run: (value) => String(value).split("L").join("m"),
});
