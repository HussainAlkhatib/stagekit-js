'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2970",
  name: "Replace \"I\" with \"t\"",
  description: "Replaces every I with t.",
  run: (value) => String(value).split("I").join("t"),
});
