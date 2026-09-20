'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1990",
  name: "Replace \"s\" with \"p\"",
  description: "Replaces every s with p.",
  run: (value) => String(value).split("s").join("p"),
});
