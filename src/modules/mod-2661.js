'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2661",
  name: "Replace \"D\" with \"p\"",
  description: "Replaces every D with p.",
  run: (value) => String(value).split("D").join("p"),
});
