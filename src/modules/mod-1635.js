'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1635",
  name: "Replace \"m\" with \"B\"",
  description: "Replaces every m with B.",
  run: (value) => String(value).split("m").join("B"),
});
