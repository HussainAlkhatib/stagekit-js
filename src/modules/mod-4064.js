'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4064",
  name: "Replace \"0\" with \"p\"",
  description: "Replaces every 0 with p.",
  run: (value) => String(value).split("0").join("p"),
});
