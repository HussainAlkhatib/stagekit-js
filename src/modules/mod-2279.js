'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2279",
  name: "Replace \"w\" with \"9\"",
  description: "Replaces every w with 9.",
  run: (value) => String(value).split("w").join("9"),
});
