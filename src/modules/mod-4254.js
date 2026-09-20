'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4254",
  name: "Replace \"3\" with \"w\"",
  description: "Replaces every 3 with w.",
  run: (value) => String(value).split("3").join("w"),
});
