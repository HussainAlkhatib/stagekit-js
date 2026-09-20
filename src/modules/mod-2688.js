'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2688",
  name: "Replace \"D\" with \"R\"",
  description: "Replaces every D with R.",
  run: (value) => String(value).split("D").join("R"),
});
