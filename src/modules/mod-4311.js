'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4311",
  name: "Replace \"4\" with \"s\"",
  description: "Replaces every 4 with s.",
  run: (value) => String(value).split("4").join("s"),
});
