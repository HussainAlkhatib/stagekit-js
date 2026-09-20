'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2002",
  name: "Replace \"s\" with \"C\"",
  description: "Replaces every s with C.",
  run: (value) => String(value).split("s").join("C"),
});
