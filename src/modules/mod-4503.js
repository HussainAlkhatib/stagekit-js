'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4503",
  name: "Replace \"7\" with \"B\"",
  description: "Replaces every 7 with B.",
  run: (value) => String(value).split("7").join("B"),
});
