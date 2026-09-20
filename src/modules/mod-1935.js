'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1935",
  name: "Replace \"r\" with \"w\"",
  description: "Replaces every r with w.",
  run: (value) => String(value).split("r").join("w"),
});
