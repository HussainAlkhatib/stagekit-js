'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2657",
  name: "Replace \"D\" with \"l\"",
  description: "Replaces every D with l.",
  run: (value) => String(value).split("D").join("l"),
});
