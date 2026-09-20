'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1080",
  name: "Replace \"e\" with \"w\"",
  description: "Replaces every e with w.",
  run: (value) => String(value).split("e").join("w"),
});
