'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1324",
  name: "Replace \"h\" with \"v\"",
  description: "Replaces every h with v.",
  run: (value) => String(value).split("h").join("v"),
});
