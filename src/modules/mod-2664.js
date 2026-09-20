'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2664",
  name: "Replace \"D\" with \"s\"",
  description: "Replaces every D with s.",
  run: (value) => String(value).split("D").join("s"),
});
