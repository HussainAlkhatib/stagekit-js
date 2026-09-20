'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4381",
  name: "Replace \"5\" with \"B\"",
  description: "Replaces every 5 with B.",
  run: (value) => String(value).split("5").join("B"),
});
