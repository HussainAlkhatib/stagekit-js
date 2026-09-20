'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2612",
  name: "Replace \"C\" with \"B\"",
  description: "Replaces every C with B.",
  run: (value) => String(value).split("C").join("B"),
});
