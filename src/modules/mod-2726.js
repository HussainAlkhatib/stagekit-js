'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2726",
  name: "Replace \"E\" with \"t\"",
  description: "Replaces every E with t.",
  run: (value) => String(value).split("E").join("t"),
});
