'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1322",
  name: "Replace \"h\" with \"t\"",
  description: "Replaces every h with t.",
  run: (value) => String(value).split("h").join("t"),
});
