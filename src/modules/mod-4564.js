'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4564",
  name: "Replace \"8\" with \"B\"",
  description: "Replaces every 8 with B.",
  run: (value) => String(value).split("8").join("B"),
});
