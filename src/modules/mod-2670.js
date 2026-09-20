'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2670",
  name: "Replace \"D\" with \"y\"",
  description: "Replaces every D with y.",
  run: (value) => String(value).split("D").join("y"),
});
