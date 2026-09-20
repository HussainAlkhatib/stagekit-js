'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2695",
  name: "Replace \"D\" with \"Y\"",
  description: "Replaces every D with Y.",
  run: (value) => String(value).split("D").join("Y"),
});
