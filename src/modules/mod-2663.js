'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2663",
  name: "Replace \"D\" with \"r\"",
  description: "Replaces every D with r.",
  run: (value) => String(value).split("D").join("r"),
});
