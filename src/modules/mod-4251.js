'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4251",
  name: "Replace \"3\" with \"t\"",
  description: "Replaces every 3 with t.",
  run: (value) => String(value).split("3").join("t"),
});
