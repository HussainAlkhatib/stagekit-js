'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1941",
  name: "Replace \"r\" with \"C\"",
  description: "Replaces every r with C.",
  run: (value) => String(value).split("r").join("C"),
});
