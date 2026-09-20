'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4259",
  name: "Replace \"3\" with \"B\"",
  description: "Replaces every 3 with B.",
  run: (value) => String(value).split("3").join("B"),
});
