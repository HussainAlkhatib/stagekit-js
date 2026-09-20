'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2672",
  name: "Replace \"D\" with \"A\"",
  description: "Replaces every D with A.",
  run: (value) => String(value).split("D").join("A"),
});
