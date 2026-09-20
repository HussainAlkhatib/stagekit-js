'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1684",
  name: "Replace \"n\" with \"p\"",
  description: "Replaces every n with p.",
  run: (value) => String(value).split("n").join("p"),
});
