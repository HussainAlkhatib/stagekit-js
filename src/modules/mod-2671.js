'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2671",
  name: "Replace \"D\" with \"z\"",
  description: "Replaces every D with z.",
  run: (value) => String(value).split("D").join("z"),
});
