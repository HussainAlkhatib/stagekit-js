'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3824",
  name: "Replace \"W\" with \"t\"",
  description: "Replaces every W with t.",
  run: (value) => String(value).split("W").join("t"),
});
