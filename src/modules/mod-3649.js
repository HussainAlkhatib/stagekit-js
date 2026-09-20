'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3649",
  name: "Replace \"T\" with \"B\"",
  description: "Replaces every T with B.",
  run: (value) => String(value).split("T").join("B"),
});
