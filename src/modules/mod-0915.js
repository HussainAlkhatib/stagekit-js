'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0915",
  name: "Replace \"d\" with \"C\"",
  description: "Replaces every d with C.",
  run: (value) => String(value).split("d").join("C"),
});
