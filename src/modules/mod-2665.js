'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2665",
  name: "Replace \"D\" with \"t\"",
  description: "Replaces every D with t.",
  run: (value) => String(value).split("D").join("t"),
});
