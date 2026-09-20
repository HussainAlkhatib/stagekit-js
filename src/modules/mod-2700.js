'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2700",
  name: "Replace \"D\" with \"3\"",
  description: "Replaces every D with 3.",
  run: (value) => String(value).split("D").join("3"),
});
