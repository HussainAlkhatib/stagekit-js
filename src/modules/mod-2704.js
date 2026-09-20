'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2704",
  name: "Replace \"D\" with \"7\"",
  description: "Replaces every D with 7.",
  run: (value) => String(value).split("D").join("7"),
});
