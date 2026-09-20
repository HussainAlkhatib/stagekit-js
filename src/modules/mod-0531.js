'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0531",
  name: "Replace \"b\" with \"w\"",
  description: "Replaces every b with w.",
  run: (value) => String(value).split("b").join("w"),
});
