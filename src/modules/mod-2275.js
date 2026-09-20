'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2275",
  name: "Replace \"w\" with \"5\"",
  description: "Replaces every w with 5.",
  run: (value) => String(value).split("w").join("5"),
});
