'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0993",
  name: "Replace \"d\" with \"2\"",
  description: "Replaces every d with 2.",
  run: (value) => String(value).split("d").join("2"),
});
