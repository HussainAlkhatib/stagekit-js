'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1208",
  name: "Replace \"f\" with \"B\"",
  description: "Replaces every f with B.",
  run: (value) => String(value).split("f").join("B"),
});
