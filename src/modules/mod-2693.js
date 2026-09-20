'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2693",
  name: "Replace \"D\" with \"W\"",
  description: "Replaces every D with W.",
  run: (value) => String(value).split("D").join("W"),
});
