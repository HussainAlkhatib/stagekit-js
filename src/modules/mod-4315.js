'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4315",
  name: "Replace \"4\" with \"w\"",
  description: "Replaces every 4 with w.",
  run: (value) => String(value).split("4").join("w"),
});
