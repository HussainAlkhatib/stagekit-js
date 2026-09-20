'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2681",
  name: "Replace \"D\" with \"K\"",
  description: "Replaces every D with K.",
  run: (value) => String(value).split("D").join("K"),
});
