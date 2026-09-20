'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0894",
  name: "Replace \"d\" with \"v\"",
  description: "Replaces every d with v.",
  run: (value) => String(value).split("d").join("v"),
});
