'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1098",
  name: "Replace \"e\" with \"C\"",
  description: "Replaces every e with C.",
  run: (value) => String(value).split("e").join("C"),
});
