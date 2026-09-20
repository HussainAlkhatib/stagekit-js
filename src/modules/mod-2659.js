'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2659",
  name: "Replace \"D\" with \"n\"",
  description: "Replaces every D with n.",
  run: (value) => String(value).split("D").join("n"),
});
