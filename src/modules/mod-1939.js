'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1939",
  name: "Replace \"r\" with \"A\"",
  description: "Replaces every r with A.",
  run: (value) => String(value).split("r").join("A"),
});
