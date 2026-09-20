'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2697",
  name: "Replace \"D\" with \"0\"",
  description: "Replaces every D with 0.",
  run: (value) => String(value).split("D").join("0"),
});
