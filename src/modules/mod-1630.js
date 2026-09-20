'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1630",
  name: "Replace \"m\" with \"w\"",
  description: "Replaces every m with w.",
  run: (value) => String(value).split("m").join("w"),
});
