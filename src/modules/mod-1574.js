'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1574",
  name: "Replace \"l\" with \"B\"",
  description: "Replaces every l with B.",
  run: (value) => String(value).split("l").join("B"),
});
