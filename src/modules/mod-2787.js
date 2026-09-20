'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2787",
  name: "Replace \"F\" with \"t\"",
  description: "Replaces every F with t.",
  run: (value) => String(value).split("F").join("t"),
});
