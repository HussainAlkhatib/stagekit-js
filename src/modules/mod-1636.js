'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1636",
  name: "Replace \"m\" with \"C\"",
  description: "Replaces every m with C.",
  run: (value) => String(value).split("m").join("C"),
});
