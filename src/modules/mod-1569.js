'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1569",
  name: "Replace \"l\" with \"w\"",
  description: "Replaces every l with w.",
  run: (value) => String(value).split("l").join("w"),
});
