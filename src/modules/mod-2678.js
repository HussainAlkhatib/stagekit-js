'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2678",
  name: "Replace \"D\" with \"H\"",
  description: "Replaces every D with H.",
  run: (value) => String(value).split("D").join("H"),
});
