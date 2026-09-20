'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2702",
  name: "Replace \"D\" with \"5\"",
  description: "Replaces every D with 5.",
  run: (value) => String(value).split("D").join("5"),
});
