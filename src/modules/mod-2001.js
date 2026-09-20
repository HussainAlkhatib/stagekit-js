'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2001",
  name: "Replace \"s\" with \"B\"",
  description: "Replaces every s with B.",
  run: (value) => String(value).split("s").join("B"),
});
