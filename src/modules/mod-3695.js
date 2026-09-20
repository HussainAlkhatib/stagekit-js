'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3695",
  name: "Replace \"U\" with \"m\"",
  description: "Replaces every U with m.",
  run: (value) => String(value).split("U").join("m"),
});
