'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4198",
  name: "Replace \"2\" with \"B\"",
  description: "Replaces every 2 with B.",
  run: (value) => String(value).split("2").join("B"),
});
