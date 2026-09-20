'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2677",
  name: "Replace \"D\" with \"G\"",
  description: "Replaces every D with G.",
  run: (value) => String(value).split("D").join("G"),
});
