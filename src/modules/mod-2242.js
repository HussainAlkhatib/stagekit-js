'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2242",
  name: "Replace \"w\" with \"y\"",
  description: "Replaces every w with y.",
  run: (value) => String(value).split("w").join("y"),
});
