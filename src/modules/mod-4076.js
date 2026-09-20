'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4076",
  name: "Replace \"0\" with \"B\"",
  description: "Replaces every 0 with B.",
  run: (value) => String(value).split("0").join("B"),
});
