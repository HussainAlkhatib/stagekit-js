'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4491",
  name: "Replace \"7\" with \"p\"",
  description: "Replaces every 7 with p.",
  run: (value) => String(value).split("7").join("p"),
});
