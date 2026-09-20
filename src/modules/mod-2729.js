'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2729",
  name: "Replace \"E\" with \"w\"",
  description: "Replaces every E with w.",
  run: (value) => String(value).split("E").join("w"),
});
