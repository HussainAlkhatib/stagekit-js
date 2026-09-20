'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2699",
  name: "Replace \"D\" with \"2\"",
  description: "Replaces every D with 2.",
  run: (value) => String(value).split("D").join("2"),
});
