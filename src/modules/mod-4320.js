'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4320",
  name: "Replace \"4\" with \"B\"",
  description: "Replaces every 4 with B.",
  run: (value) => String(value).split("4").join("B"),
});
