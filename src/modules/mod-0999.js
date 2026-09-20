'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0999",
  name: "Replace \"d\" with \"4\"",
  description: "Replaces every d with 4.",
  run: (value) => String(value).split("d").join("4"),
});
