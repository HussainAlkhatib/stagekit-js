'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4531",
  name: "Replace \"7\" with \"3\"",
  description: "Replaces every 7 with 3.",
  run: (value) => String(value).split("7").join("3"),
});
