'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3948",
  name: "Replace \"Y\" with \"v\"",
  description: "Replaces every Y with v.",
  run: (value) => String(value).split("Y").join("v"),
});
