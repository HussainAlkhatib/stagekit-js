'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1315",
  name: "Replace \"h\" with \"m\"",
  description: "Replaces every h with m.",
  run: (value) => String(value).split("h").join("m"),
});
