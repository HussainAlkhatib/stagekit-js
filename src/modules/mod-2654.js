'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2654",
  name: "Replace \"D\" with \"i\"",
  description: "Replaces every D with i.",
  run: (value) => String(value).split("D").join("i"),
});
