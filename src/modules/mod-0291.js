'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0291",
  name: "Replace \"a\" with \"B\"",
  description: "Replaces every a with B.",
  run: (value) => String(value).split("a").join("B"),
});
