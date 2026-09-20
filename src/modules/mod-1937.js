'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1937",
  name: "Replace \"r\" with \"y\"",
  description: "Replaces every r with y.",
  run: (value) => String(value).split("r").join("y"),
});
