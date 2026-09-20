'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4437",
  name: "Replace \"6\" with \"w\"",
  description: "Replaces every 6 with w.",
  run: (value) => String(value).split("6").join("w"),
});
