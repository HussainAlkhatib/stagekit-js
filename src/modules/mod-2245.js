'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2245",
  name: "Replace \"w\" with \"B\"",
  description: "Replaces every w with B.",
  run: (value) => String(value).split("w").join("B"),
});
