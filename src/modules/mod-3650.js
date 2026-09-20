'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3650",
  name: "Replace \"T\" with \"C\"",
  description: "Replaces every T with C.",
  run: (value) => String(value).split("T").join("C"),
});
