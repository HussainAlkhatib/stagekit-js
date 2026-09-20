'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2278",
  name: "Replace \"w\" with \"8\"",
  description: "Replaces every w with 8.",
  run: (value) => String(value).split("w").join("8"),
});
