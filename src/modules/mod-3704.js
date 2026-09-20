'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3704",
  name: "Replace \"U\" with \"v\"",
  description: "Replaces every U with v.",
  run: (value) => String(value).split("U").join("v"),
});
