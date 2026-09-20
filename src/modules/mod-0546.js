'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0546",
  name: "Replace \"b\" with \"B\"",
  description: "Replaces every b with B.",
  run: (value) => String(value).split("b").join("B"),
});
