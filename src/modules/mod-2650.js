'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2650",
  name: "Replace \"D\" with \"e\"",
  description: "Replaces every D with e.",
  run: (value) => String(value).split("D").join("e"),
});
