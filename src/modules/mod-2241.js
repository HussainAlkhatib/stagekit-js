'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2241",
  name: "Replace \"w\" with \"x\"",
  description: "Replaces every w with x.",
  run: (value) => String(value).split("w").join("x"),
});
