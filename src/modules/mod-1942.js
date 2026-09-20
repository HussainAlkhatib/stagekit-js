'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1942",
  name: "Replace \"r\" with \"D\"",
  description: "Replaces every r with D.",
  run: (value) => String(value).split("r").join("D"),
});
