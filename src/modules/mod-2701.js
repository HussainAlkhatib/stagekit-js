'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2701",
  name: "Replace \"D\" with \"4\"",
  description: "Replaces every D with 4.",
  run: (value) => String(value).split("D").join("4"),
});
