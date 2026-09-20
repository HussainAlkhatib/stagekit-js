'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1627",
  name: "Replace \"m\" with \"t\"",
  description: "Replaces every m with t.",
  run: (value) => String(value).split("m").join("t"),
});
