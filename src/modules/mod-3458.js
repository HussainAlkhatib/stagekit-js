'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3458",
  name: "Replace \"Q\" with \"t\"",
  description: "Replaces every Q with t.",
  run: (value) => String(value).split("Q").join("t"),
});
