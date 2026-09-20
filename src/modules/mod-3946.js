'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3946",
  name: "Replace \"Y\" with \"t\"",
  description: "Replaces every Y with t.",
  run: (value) => String(value).split("Y").join("t"),
});
