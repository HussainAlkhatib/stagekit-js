'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2263",
  name: "Replace \"w\" with \"T\"",
  description: "Replaces every w with T.",
  run: (value) => String(value).split("w").join("T"),
});
