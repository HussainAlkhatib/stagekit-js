'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1917",
  name: "Replace \"r\" with \"d\"",
  description: "Replaces every r with d.",
  run: (value) => String(value).split("r").join("d"),
});
