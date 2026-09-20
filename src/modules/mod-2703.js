'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2703",
  name: "Replace \"D\" with \"6\"",
  description: "Replaces every D with 6.",
  run: (value) => String(value).split("D").join("6"),
});
