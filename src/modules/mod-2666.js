'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2666",
  name: "Replace \"D\" with \"u\"",
  description: "Replaces every D with u.",
  run: (value) => String(value).split("D").join("u"),
});
