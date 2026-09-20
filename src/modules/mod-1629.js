'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1629",
  name: "Replace \"m\" with \"v\"",
  description: "Replaces every m with v.",
  run: (value) => String(value).split("m").join("v"),
});
