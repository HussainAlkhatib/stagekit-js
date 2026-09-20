'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2606",
  name: "Replace \"C\" with \"v\"",
  description: "Replaces every C with v.",
  run: (value) => String(value).split("C").join("v"),
});
