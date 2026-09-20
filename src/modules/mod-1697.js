'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1697",
  name: "Replace \"n\" with \"C\"",
  description: "Replaces every n with C.",
  run: (value) => String(value).split("n").join("C"),
});
