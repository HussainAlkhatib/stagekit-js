'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2652",
  name: "Replace \"D\" with \"g\"",
  description: "Replaces every D with g.",
  run: (value) => String(value).split("D").join("g"),
});
