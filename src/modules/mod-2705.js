'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2705",
  name: "Replace \"D\" with \"8\"",
  description: "Replaces every D with 8.",
  run: (value) => String(value).split("D").join("8"),
});
